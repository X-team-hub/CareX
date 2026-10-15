-- ============================================================
-- Seed data (development/demo only)
-- ============================================================

insert into public.doctors (name, specialization, qualification, experience_years, location, languages, bio, consultation_fee, verified, is_active) values
  ('Dr. Ananya Rao (Demo)', 'Gynaecologist', 'MBBS, MS (Obs & Gyn)', 12, 'Bengaluru', array['Hindi','English','Kannada'], 'Specialist in menstrual disorders and PCOS.', 400, true, true),
  ('Dr. Meera Iyer (Demo)', 'PCOS Specialist', 'MBBS, DGO', 9, 'Chennai', array['English','Tamil'], 'Focus on hormonal health and adolescent care.', 350, true, true),
  ('Dr. Farah Khan (Demo)', 'General Physician', 'MBBS, MD', 7, 'Delhi', array['Hindi','Urdu','English'], 'General health and women''s wellness.', 200, true, true);