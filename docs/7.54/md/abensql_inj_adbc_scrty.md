  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) →  [SQL Injections](javascript:call_link\('abensql_injections_scrty.htm'\)) → 

SQL Injections Using ADBC

When [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") is used, SQL statements are passed as strings to objects of class ADBC and then passed on to the database system. If all of part of one of these SQL statements originates from outside of the program, there is a risk of an SQL injection.

To prevent SQL Injections, make sure that SQL statements passed to ADBC contain as few parts as possible that originate from outside of the program. If the statements do contain parts from outside the program, the contents of these parts should not be chained to the SQL statement. Instead these contents should be addressed using the ? placeholder and the associated SET\_PARAM methods. If this is not possible, the parts from outside must be checked using the CL\_ABAP\_DYN\_PRG class and masked if necessary.

Example

In the following program section, the key value key (entered from outside ) is chained to the SQL statement. It must therefore be masked using the method QUOTE (which also adds quotation marks at the start and at the end), to prevent SQL injections.

DATA key TYPE string.
cl\_demo\_input=>request( CHANGING field = key ).
TRY.
    DATA(result) = NEW cl\_sql\_statement( )->execute\_query(
          \`SELECT carrname \` &&
          \`FROM scarr \` &&
          \`WHERE mandt  = \` && \`'\` && sy-mandt && \`' AND\` &&
          \`      carrid = \` &&
          cl\_abap\_dyn\_prg=>quote( to\_upper( key ) ) ).
    DATA name TYPE scarr-carrname.
    result->set\_param( REF #( name ) ).
    result->next( ).
    cl\_demo\_output=>display( name ).
  CATCH cx\_sql\_exception INTO DATA(err).
    cl\_demo\_output=>display( err->get\_text( ) ).
ENDTRY.

Example

In this example, the same functionality is used as in the previous example. Here it is not necessary to mask the value, because the input is connected to a parameter (and not chained).

DATA key TYPE string.
cl\_demo\_input=>request( CHANGING field = key ).
TRY.
    DATA(sql) = NEW cl\_sql\_statement( ).
    sql->set\_param( REF #( sy-mandt ) ).
    sql->set\_param( REF #( key ) ).
    DATA(result) = sql->execute\_query(
          \`SELECT carrname \` &&
          \`FROM scarr \` &&
          \`WHERE mandt  = ? AND carrid = ?\` ).
    DATA name TYPE scarr-carrname.
    result->set\_param( REF #( name ) ).
    result->next( ).
    cl\_demo\_output=>display( name ).
  CATCH cx\_sql\_exception INTO DATA(err).
    cl\_demo\_output=>display( err->get\_text( ) ).
ENDTRY.