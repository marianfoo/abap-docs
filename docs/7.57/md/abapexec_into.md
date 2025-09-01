  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql.htm) →  [Embedded Native SQL (EXEC SQL)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennativesql.htm) →  [EXEC SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXEC SQL - INTO, ABAPEXEC_INTO, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

EXEC SQL - INTO

Syntax

EXEC SQL.
  SELECT ... INTO \[STRUCTURE\] :host1 *\[*, host2*\]* ...
ENDEXEC.

Effect

In a native SELECT or FETCH statement specified between EXEC and ENDEXEC, an INTO clause can be specified to pass the read data to [host variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_host.htm) host1, host2, ... specified after the statement. If there are multiple rows in the result set, any one of the rows is read.

If a structure is specified as a [host variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_host.htm) in after INTO, it is transformed by the Native SQL interface as if its components were listed as individual fields separated by commas. The addition STRUCTURE can be specified between INTO and a single host variable. This addition has the effect that the host variable is handled like a structure, even if an untyped formal parameter or an untyped field symbol is specified. Otherwise, when multiple values are being passed, depending on the platform, either the first value only is passed, or an exception is raised.

Hints

-   The SAP-specific addition INTO is removed from the statement by the Native SQL interface before it is passed to the database.
-   The addition INTO can only be used in statements introduced using SELECT and FETCH. In a statement introduced using WITH to define a common table expression (CTE), for example, INTO is not possible. In cases like this, either [OPEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_cursor.htm) or [ADBC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc.htm) (recommended) must be used.

Example

As in the example for [host variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_host.htm). The addition STRUCTURE is specified after INTO. However, this is not necessary since wa is known statically as a structure. The structure wa is handled in the INTO clause as if all substrings were specified separately: INTO :wa-cityfrom, :wa-cityto.

DATA: carrid TYPE spfli-carrid VALUE 'LH',
      connid TYPE spfli-connid VALUE '400'.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = carrid
  )->add\_field( CHANGING field = connid )->request( ).
DATA: BEGIN OF wa,
        cityfrom TYPE spfli-cityfrom,
        cityto   TYPE spfli-cityto,
      END OF wa.
EXEC SQL.
  SELECT cityfrom, cityto
         INTO STRUCTURE :wa
         FROM spfli
         WHERE mandt  = :sy-mandt AND
               carrid = :carrid AND connid = :connid
ENDEXEC.
cl\_demo\_output=>display( wa ).