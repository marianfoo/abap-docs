  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_programming_scrty.htm) →  [SQL Injections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_injections_scrty.htm) → 

SQL Injections Using Generic Programming

Generic programming is the most unsafe of all dynamic programming techniques. In principle, the [ABAP statement injections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneric_prog_scrty.htm) cover all individual security risks that can occur in dynamic programming, and most significantly SQL injections. The more generic the programming, the more difficult it is to prevent SQL injections from exploiting input that originates outside the program.

Example

The following program section demonstrates [static embedded of Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennativesql.htm) in a program generated using [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_subroutine_pool.htm). Before [ADBC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc_glosry.htm "Glossary Entry") was introduced, this was the only way of creating dynamic parts in [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry"). In the case in question, the input key must be escaped using the method ESCAPE\_QUOTES of the class CL\_ABAP\_DYN\_PRG to prevent SQL injections. In a more realistic example, of course, [host variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec_host.htm) would be the preferred method.

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
GENERATE SUBROUTINE POOL source NAME DATA(pool).
IF sy-subrc = 0.
  PERFORM exec\_sql IN PROGRAM (pool) CHANGING name.
ENDIF.
cl\_demo\_output=>display( name ).