-- DATA COACH
insert into coach (id, last_name, first_name, email1, email2, phone_number1, phone_number2, status_is_active) values (nextval('coach_id_seq'),'Boulanger','Gaston','GastonBoulanger@armyspy.com','','01 47 87 12 78','','true');
insert into coach (id, last_name, first_name, email1, email2, phone_number1, phone_number2, status_is_active) values (nextval('coach_id_seq'),'Paradis','Jacques','JacquesParadis@dayrep.com','','02 33 24 55 26','','true');

-- DATA SERIES
insert into series (id, label) values (nextval('series_id_seq'),'1ère série');
insert into series (id, label) values (nextval('series_id_seq'),'2ème série');
insert into series (id, label) values (nextval('series_id_seq'),'3ème série');
insert into series (id, label) values (nextval('series_id_seq'),'4ème série');

-- DATA CLUB
insert into club (id, name, address1, address2, zip_code, city, phone_number, url_google_maps, status_is_active) values (nextval('club_id_seq'),'Tennis Fruit défendu','82 bd Bellerive','','92500','Rueil-Malmaison','01 47 51 14 93','https://goo.gl/maps/bwJTxnywwHRBZCiR8','true');
insert into club (id, name, address1, address2, zip_code, city, phone_number, url_google_maps, status_is_active) values (nextval('club_id_seq'),'Domaine BNPP','34 rue de Voisins','','78430','Louveciennes','01 30 78 12 40','https://goo.gl/maps/NM4JvmDhCtU4Fc3T9','true');
insert into club (id, name, address1, address2, zip_code, city, phone_number, url_google_maps, status_is_active) values (nextval('club_id_seq'),'Comité des Hauts de Seine de Tennis','4 Rue Edouard Manet','','92500','Rueil-Malmaison','01 41 39 84 00','https://goo.gl/maps/UtU8Nhie88k8UMhr8','true');

-- DATA TRAINING GROUP
insert into training_group (id, label, coach_id) values (nextval('training_group_id_seq'),'Groupe Niv.1','1');
insert into training_group (id, label, coach_id) values (nextval('training_group_id_seq'),'Groupe Niv.2','2');
insert into training_group (id, label, coach_id) values (nextval('training_group_id_seq'),'Groupe Niv.3','1');
insert into training_group (id, label, coach_id) values (nextval('training_group_id_seq'),'Groupe Niv.4','2');
insert into training_group (id, label, coach_id) values (nextval('training_group_id_seq'),'Groupe Femmes','1');

-- DATA TRAINING DAY
insert into training_day (id, day, start_time, max_number_players, status_is_active, club_id, training_group_id) values (nextval('training_day_id_seq'),'Lundi','20:00:00','8','true','1','3');
insert into training_day (id, day, start_time, max_number_players, status_is_active, club_id, training_group_id) values (nextval('training_day_id_seq'),'Lundi','21:00:00','8','true','3','4');
insert into training_day (id, day, start_time, max_number_players, status_is_active, club_id, training_group_id) values (nextval('training_day_id_seq'),'Lundi','19:00:00','8','true','3','5');
insert into training_day (id, day, start_time, max_number_players, status_is_active, club_id, training_group_id) values (nextval('training_day_id_seq'),'Mardi','21:00:00','8','true','3','2');
insert into training_day (id, day, start_time, max_number_players, status_is_active, club_id, training_group_id) values (nextval('training_day_id_seq'),'Jeudi','21:00:00','8','true','3','1');

-- DATA RANKING
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'NC','4');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'40','4');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'30/5','4');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'30/4','4');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'30/3','4');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'30/2','4');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'30/1','4');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'30','3');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'15/5','3');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'15/4','3');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'15/3','3');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'15/2','3');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'15/1','3');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'15','2');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'5/6','2');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'4/6','2');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'3/6','2');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'2/6','2');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'1/6','2');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'0','2');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'-2/6','2');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'-4/6','2');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'-15','2');
insert into ranking (id, label, series_id) values (nextval('ranking_id_seq'),'Promotion','2');

-- DATA PLAYER
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Gabriaux','Patrick ','pgabriaux','xaeCeiga4','PatrickGabriaux@lobbybiz.fr','','07 00 55 56 24','','0','1','9','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Guertin','Gaston', 'gguertin','aiPi3mohf2x','GastonGuertin@creditfair.com','','06 55 52 15 76','','0','1','11','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Montjoie','Daniel', 'dmontjoie', 'Aichep4eiQu','DanielMontjoie@illico.fr','','01 79 45 89 47','','0','1','1','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Laboissonnière','Henri','hlaboissonniere','juoTaiWu7','HenriLaboissonniere@javafly.fr','','01 27 11 44 81','','0','1','12','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Laforge','Gilles','glaforge','tai2Ofegeec','GillesLaforge@deepblue.com','','01 44 54 12 70','','0','1','9','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Lambert','Kévin ','klambert','Nee4xahc', 'KevinLambert@yopmail.com','','01 04 36 44 72','','0','1','11','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Lachapelle','Philippe', 'plachapelle', 'Eth9ieXa', 'PhilippeLachapelle@yopmail.fr','','01 17 16 52 42','07 65 55 93 64', '0','1','10','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Guardado','Ione','iguardado', 'QueiwaeNoh2', 'IoneGuardado@yopmail.fr','','01 60 69 19 39','','0','1','12','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Ma','Lei ','lma','queeGhai1', 'LeiMa@solarhills.fr','','06 55 58 50 01','', '0','1','11','true','false','true');
--
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Bernier','Armand','abernier','je5Ziech','ArmandBernier@firstadsl.fr','','01 13 79 75 80','07 75 55 80 93','0','2','8','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Thibodeau','Honoré','hthibodeau','wohh0Eix7','HonoreThibodeau@deepblue.com','','01 80 43 05 08','','0','2','8','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Faubert','Philippe','pfaubert','ohShee4ah','PhilippeFaubert@mailstone.com','','01 41 97 23 22','','0','2','9','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Lanctot','David','dlanctot','ahs2OhJee7k','DavidLanctot@photolynx.fr','','06 55 57 56 25','','0','2','7','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Patenaude','Noël','npatenaude','XieWo0een','NoelPatenaude@javafly.fr','','01 44 99 25 44','','0','2','1','true','false','true');
--
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Conway','Hayden','hconway', 'Gaaf6Be7ae', 'HaydenConway@illico.fr','','01 24 37 60 91','','0','3','6','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Boutros','Tamir','tboutros', 'ju4OoyeithePh', 'TamirYunusBoutros@primaryfocus.com','','01 44 83 88 70','','0','3','6','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Renard','Daniel','drenard', 'lA)?sVd~,R', 'DanielRenard@deepblue.com','','01 63 68 46 24','','0','3','7','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Fontaine','François','ffontaine', '^:Gp*_u.iVutEqAd-', 'francois75@naboo.fr','','06 66 66 71 41','','0','3','5','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Matthieu','Nicolas','nmatthieu', 'V!oLBH7Iiwx', 'nicolas.matthieu@empowerslife.com','','01 47 92 52 11','','0','3','6','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Wagner','Dominique','dwagner', '|L3ByT+J%,j1o[G:|(s&', 'DominiqueWagner@anserva.com','','01 44 83 88 70','','0','3','1','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Petitjean','Étienne','epetitjean', '@;GhAu@8~iKL', 'Etienne.Petitjean@infosubs.fr','','06 56 70 63 71','','0','3','6','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Haering','Dominic','dhaering', 'caE_bu*re\caaae', 'DominicHaering@owlymail.com','','01 47 63 92 47','','0','3','7','true','false','true');
--
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Colas','Grégoire','gcolas', 'AhReitee2', 'gcolas@owlymail.com','','07 26 00 88 98','','0','4','1','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Da Costa','Jérôme','jdacosta', 'ieSiS3wie', 'jda-costa@owlymail.com','','06 67 17 15 60','','0','4','7','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Gomes','Christophe','cgomes', 'Eatexturink00', 'ChristopheGomes@owlymail.com','','09 37 78 87 06','','0','4','1','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Gimenez','Joseph','jgimenez', 'ieC4ooxie', 'j.gimenez@owlymail.com','','01 43 00 68 59','','0','4','1','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Moreno','Rémy','rmoreno', 'Quoojah4sae', 'RemyMoreno@owlymail.com','','01 41 04 28 43','','0','4','4','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Meyer','Nicolas','nmeyer', 'EiyahPh5po', 'NicoMeyer91@owlymail.com','','07 28 58 15 50','','0','4','6','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Rey','Marc','mrey', 'tieBee8E', 'marc.rey@owlymail.com','','06 16 63 69 15','','0','4','7','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Baudry-Jacquot','Alex','abaudryjacquot', 'fahShoosh6ee', 'abaudryjacquot@owlymail.com','','07 82 91 05 10','','0','4','4','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Meunier','Quentin','qmeunier', 'eithieGh4', 'QuentinMeunier@syncforum.fr','','01 30 53 06 65','','0','4','8','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Potier','Emmanuel','epotier', 'iphe5ULeu8ai', 'EmmanuelPotier@owlymail.com','','01 65 91 31 47','','0','4','3','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Thompson','Connor','cthompson', 'eemae3Aibe', 'connor.thompson@mymail.ca','','01 45 46 94 16','','0','4','7','true','false','true');
--
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Barrette','Elisabeth','ebarrette','Hus5oquu','ElisabethBarrette@yopmail.com','','01 39 20 88 69','','0','5','3','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Deschênes','Brigitte','bdeschenes','ahku3kie6Ai','BrigitteDeschenes@illico.fr','','06 65 55 56 20','','0','5','4','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Lemelin','Lucile','llemelin','ju4OoyeithePh','LucileLemelin@illico.fr','','01 62 51 23 61','07 45 55 13 91','0','5','5','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Pugliesi','Marianna','mpugliesi', 'ew1eoc6X', 'MariannaPugliesi@firstadsl.fr','','01 98 37 30 78','','0','5','6','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Riquier','Diane','driquier','Ahtaexaev8h','DianeRiquier@deepblue.com','','06 55 59 09 48','','0','5','4','true','false','true');
-- insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active) values (nextval('player_id_seq'),'Tisserand','Blanche','btisserand', 'Nai4Eisah','BlancheTisserand@rhyta.com','','07 35 55 05 21','','0','5','6','true','false','true');


insert into player (id, last_name, first_name, username, password, email1, email2, phone_number1, phone_number2, training_count, training_group_id, ranking_id, general_alert_on, player_alert_on, status_is_active, role) values (nextval('player_id_seq'),'Vong','Saya','svong', 'mypassword','svong@free.fr','','','','0','1','1','true','true','true', 'ROLE_READER');