exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing Supabase env vars" }),
      };
    }

    const payload = JSON.parse(event.body || "{}");

    const row = {
      name_couple: payload.name_couple,
      name_person_1: payload.name_person_1,
      name_person_2: payload.name_person_2,
      birth_person_1: payload.birth_person_1 || null,
      birth_person_2: payload.birth_person_2 || null,
      wedding_date: payload.wedding_date || null,
      phone: payload.phone || null,
      email: payload.email || null,
      address: payload.address || null,
      children: payload.children || null,
      is_member: payload.is_member ?? false,
      membership_time: payload.membership_time || null,
      other_church: payload.other_church || null,
      photo_url: payload.photo_url || null,
      notes: payload.notes || null,
    };

    // Validação mínima
    if (!row.name_couple || !row.name_person_1 || !row.name_person_2) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Campos obrigatórios: name_couple, name_person_1, name_person_2",
        }),
      };
    }

    const resp = await fetch(`${SUPABASE_URL}/rest/v1/couples`, {
      method: "POST",
      headers: {
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(row),
    });

    const data = await resp.json();

    if (!resp.ok) {
      return {
        statusCode: resp.status,
        body: JSON.stringify({ error: data }),
      };
    }

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ok: true, inserted: data }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: String(err) }),
    };
  }
};
