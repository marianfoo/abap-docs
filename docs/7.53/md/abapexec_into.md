  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql.htm) →  [EXEC SQL - Embedded Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennativesql.htm) →  [EXEC SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexec.htm) → 

EXEC SQL - INTO

Syntax

EXEC SQL.
  SELECT ... INTO \[STRUCTURE\] :host1 *\[*, host2*\]* ...
ENDEXEC.

Effect

In a native SELECT or FETCH statement specified between EXEC and ENDEXEC, an INTO clause can be specified to pass the read data to [host variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexec_host.htm) host1, host2, ... specified after the statement. If there are multiple rows in the results set, any one of the rows is read.

If a structure is specified as a [host variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexec_host.htm) in after INTO, it is transformed by the Native SQL interface as if its components were specified as individual fields separated by commas. The addition STRUCTURE can be specified between INTO and a single host variable. This addition has the effect that the host variable is handled like a structure, even if a non-typed formal parameter or a non-typed field symbol is specified. Otherwise, when multiple values are being passed, depending on the platform, either the first value only is passed or an exception is raised.

Notes

-   The SAP-specific addition INTO is removed from the statement by the Native SQL interface before it can be passed to the database.
    
-   The addition INTO can only be used in statements introduced using SELECT and FETCH. In a statement introduced using WITH to define a common table expression (CTE), for example, INTO is not possible. In cases like this, either [OPEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexec_cursor.htm) or [ADBC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc.htm) (recommended) must be used.
    

Example

As in the example for [host variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexec_host.htm). The addition STRUCTURE is specified after INTO. However, this is not necessary since wa is known statically as a structure. The structure wa is handled in the INTO clause as if all substrings were specified separately: INTO :wa-cityfrom, :wa-cityto.

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