  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_programming_scrty.htm) →  [SQL Injections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_injections_scrty.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SQL Injections Using ADBC, ABENSQL_INJ_ADBC_SCRTY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

SQL Injections Using ADBC

When [ADBC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc_glosry.htm "Glossary Entry") is used, SQL statements are passed as strings to objects of class ADBC and then passed on to the database system. If all of part of one of these SQL statements originates from outside of the program, there is a risk of an SQL injection.

To prevent SQL Injections, make sure that SQL statements passed to ADBC contain as few parts as possible that originate from outside of the program. If the statements do contain parts from outside the program, the content of these parts should not be chained to the SQL statement. Instead these content should be addressed using the ? placeholder and the associated SET\_PARAM methods. If this is not possible, the parts from outside must be checked using the CL\_ABAP\_DYN\_PRG class and escaped if necessary.

Example

In the following program section, the key value key (entered from outside ) is chained to the SQL statement. It must therefore be escaped using the method QUOTE (which also adds quotation marks at the start and at the end), to prevent SQL injections.

DATA key TYPE string.
cl\_demo\_input=>request( CHANGING field = key ).
TRY.
    FINAL(result) = NEW cl\_sql\_statement( )->execute\_query(
          \`SELECT carrname \` &&
          \`FROM scarr \` &&
          \`WHERE mandt  = \` && \`'\` && sy-mandt && \`' AND\` &&
          \`      carrid = \` &&
          cl\_abap\_dyn\_prg=>quote( to\_upper( key ) ) ).
    DATA name TYPE scarr-carrname.
    result->set\_param( REF #( name ) ).
    result->next( ).
    cl\_demo\_output=>display( name ).
  CATCH cx\_sql\_exception INTO FINAL(err).
    cl\_demo\_output=>display( err->get\_text( ) ).
ENDTRY.

Example

In this example, the same functionality is used as in the previous example. Here it is not necessary to mask the value, because the input is connected to a parameter (and not chained).

DATA key TYPE string.
cl\_demo\_input=>request( CHANGING field = key ).
TRY.
    FINAL(sql) = NEW cl\_sql\_statement( ).
    sql->set\_param( REF #( sy-mandt ) ).
    sql->set\_param( REF #( key ) ).
    FINAL(result) = sql->execute\_query(
          \`SELECT carrname \` &&
          \`FROM scarr \` &&
          \`WHERE mandt  = ? AND carrid = ?\` ).
    DATA name TYPE scarr-carrname.
    result->set\_param( REF #( name ) ).
    result->next( ).
    cl\_demo\_output=>display( name ).
  CATCH cx\_sql\_exception INTO FINAL(err).
    cl\_demo\_output=>display( err->get\_text( ) ).
ENDTRY.