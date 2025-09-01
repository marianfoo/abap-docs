  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\)) → 

AMDP, Access to Database Schemas

This example demonstrates how a table is accessed in a different [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_amdp\_db\_schema.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      cl\_demo\_output=>display(
        \`Current database system does not support AMDP procedures\` ).
      RETURN.
    ENDIF.
    TRY.
        cl\_demo\_amdp\_db\_schema=>get\_schemas\_physical(
          IMPORTING schemas = DATA(schemas\_test) ).
      CATCH cx\_amdp\_error INTO DATA(amdp\_error).
        cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    TRY.
        cl\_demo\_amdp\_db\_schema=>get\_schemas\_logical(
          IMPORTING schemas = DATA(schemas) ).
      CATCH cx\_amdp\_error INTO amdp\_error.
        cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    ASSERT schemas\_test = schemas.
    cl\_demo\_output=>display( schemas ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example accesses [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") that are declared and implemented in the [AMDP class](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") CL\_DEMO\_AMDP\_DB\_SCHEMA.

-   The method GET\_SCHEMAS\_PHYSICAL accesses the table SCHEMAS of the physical database schema SYS by specifying the schema directly. All existing database schema are saved in this table.

METHOD get\_schemas\_physical BY DATABASE PROCEDURE
                            FOR HDB LANGUAGE SQLSCRIPT.
  schemas =
    select schema\_name
      FROM "SYS"."SCHEMAS";
ENDMETHOD.

-   The method GET\_SCHEMAS\_LOGICAL accesses the physical database schema that is mapped to the [logical database schema](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry") DEMO\_LOGICAL\_DB\_SCHEMA in transaction DB\_SCHEMA\_MAP by specifying the [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry"). If this is SYS, the same table is accessed.

METHOD get\_schemas\_logical BY DATABASE PROCEDURE
                           FOR HDB LANGUAGE SQLSCRIPT.
  schemas =
    select schema\_name
      FROM "$ABAP.schema( DEMO\_LOGICAL\_DB\_SCHEMA )"."SCHEMAS";
ENDMETHOD.