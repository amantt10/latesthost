CREATE OR REPLACE FUNCTION reset_participant_id_sequence()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM setval('potential_participants_id_seq', COALESCE((SELECT MAX(id) FROM potential_participants), 0) + 1, false);
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER participant_after_delete
AFTER DELETE ON potential_participants
FOR EACH ROW
EXECUTE FUNCTION reset_participant_id_sequence();

-- Down migration (optional, for manual rollback)
-- DROP TRIGGER IF EXISTS participant_after_delete ON potential_participants;
-- DROP FUNCTION IF EXISTS reset_participant_id_sequence();