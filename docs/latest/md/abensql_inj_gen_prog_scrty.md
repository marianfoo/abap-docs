  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_programming_scrty.htm) →  [SQL Injections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_injections_scrty.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SQL%20Injections%20Using%20Generic%20Programming%2C%20ABENSQL_INJ_GEN_PROG_SCRTY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

SQL Injections Using Generic Programming

Generic programming is the most unsafe of all dynamic programming techniques. In principle, the [ABAP statement injections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneric_prog_scrty.htm) cover all individual security risks that can occur in dynamic programming, and most significantly SQL injections. The more generic the programming, the more difficult it is to prevent SQL injections from exploiting input that originates outside the program.

Example

The following program section demonstrates [static embedded of Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennativesql.htm) in a program generated using [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgenerate_subroutine_pool.htm). Before [ADBC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_glosry.htm "Glossary Entry") was introduced, this was the only way of creating dynamic parts in [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_glosry.htm "Glossary Entry"). In the case in question, the input key must be escaped using the method ESCAPE\_QUOTES of the class CL\_ABAP\_DYN\_PRG to prevent SQL injections. In a more realistic example, of course, [host variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexec_host.htm) would be the preferred method.

DATA source TYPE TABLE OF string WITH EMPTY KEY.
source = VALUE #(
  ( \`PROGRAM.\` )
  ( \`FORM exec\_sql CHANGING name TYPE string.\` )
  ( \`  EXEC SQL.\` )
  ( \`    SELECT carrname\` )
  ( \`           INTO :name\` )
  ( \`           FROM scarr\` )
  ( \`           WHERE mandt  = 'sy-mandt' AND\` )
  ( \`                 carrid = 'key'\` )
  ( \`  ENDEXEC.\` )
  ( \`ENDFORM.\` ) ).
DATA key TYPE string.
cl\_demo\_input=>request( CHANGING field = key ).
REPLACE \`sy-mandt\` IN TABLE source WITH sy-mandt.
REPLACE \`key\` IN TABLE source
              WITH cl\_abap\_dyn\_prg=>escape\_quotes( to\_upper( key ) ).
DATA name TYPE string.
GENERATE SUBROUTINE POOL source NAME FINAL(pool).
IF sy-subrc = 0.
  PERFORM exec\_sql IN PROGRAM (pool) CHANGING name.
ENDIF.
cl\_demo\_output=>display( name ).