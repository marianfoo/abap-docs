  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL](javascript:call_link\('abapexec.htm'\)) → 

EXEC SQL - Host Variables

[Host variables](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry") are global or local variables (usually variables) declared in the ABAP program that are used in operand positions of embedded [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements. [Named](javascript:call_link\('abennamed_data_object_glosry.htm'\) "Glossary Entry") data objects can be identified by an escape character (a colon :) placed in front of the names of the data objects. Instead of the data object itself, a field symbol to which the data object is assigned can be specified. Dereferenced data reference variables cannot be dereferenced.

Usually, only flat elementary fields and flat structures with elementary components can be used as host variables. If a structure is specified after the [INTO clause](javascript:call_link\('abapexec_into.htm'\)) by Native SQL, it is transformed by the Native SQL interface as if its components were specified as individual fields separated by commas.

In assignments between host variables and fields in database tables, a [mapping](javascript:call_link\('abennative_sql_type_mapping.htm'\)) takes place between the ABAP types and the database types. The ABAP types must match the database types. If they do not match, conversions must be made in the Native SQL interface. These conversions are platform-dependent and can raise exceptions.

Notes

-   When passed to a host variable, a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") is transformed to its type-dependent initial value.
    
-   The indicator variables provided in the SAP standard, which can be specified after an operand to identify null values, can be specified in static Native SQL by a host variable that has to be of an [external data type](javascript:call_link\('abenexternal_data_type_glosry.htm'\) "Glossary Entry") INT2.
    
-   Host variables cannot be [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry").
    

Example

Like the example for [literals](javascript:call_link\('abapexec_literal.htm'\)). Here, the row to read is specified using host variables.

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
         INTO :wa
         FROM spfli
         WHERE mandt  = :sy-mandt AND
               carrid = :carrid AND connid = :connid
ENDEXEC.
cl\_demo\_output=>display( wa ).