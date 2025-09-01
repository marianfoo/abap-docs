  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AMDP - Access to Database Schemas, ABENAMDP_DB_SCHEMA_ABEXA, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

AMDP - Access to Database Schemas

Demonstrates access to tables in explicitly specified [database schemas](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry").

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
          IMPORTING schemas = FINAL(schemas\_test) ).
      CATCH cx\_amdp\_error INTO DATA(amdp\_error).
        cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    TRY.
        cl\_demo\_amdp\_db\_schema=>get\_schemas\_logical(
          IMPORTING schemas = FINAL(schemas) ).
      CATCH cx\_amdp\_error INTO amdp\_error.
        cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    ASSERT schemas\_test = schemas.
    cl\_demo\_output=>write( schemas ).
    TRY.
        cl\_demo\_amdp\_db\_schema=>get\_schemas\_logical\_to\_abap(
          IMPORTING carriers = FINAL(carriers) ).
      CATCH cx\_amdp\_error INTO amdp\_error.
        cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    cl\_demo\_output=>display( carriers ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example accesses [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") that are declared and implemented in the [AMDP class](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") CL\_DEMO\_AMDP\_DB\_SCHEMA.

-   The method GET\_SCHEMAS\_PHYSICAL accesses the table SCHEMAS of the physical database schema SYS by specifying the schema directly. All existing database schema are stored in this table.
    
    METHOD get\_schemas\_physical BY DATABASE PROCEDURE
                                FOR HDB LANGUAGE SQLSCRIPT.
      schemas =
        select schema\_name
          FROM "SYS"."SCHEMAS";
    ENDMETHOD.
    
-   The method GET\_SCHEMAS\_LOGICAL accesses the physical database schema that is mapped to the [logical database schema](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry") DEMO\_LOGICAL\_DB\_SCHEMA in transaction DB\_SCHEMA\_MAP by specifying the [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") [$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)). If this is SYS, the same table is accessed.
    
    METHOD get\_schemas\_logical BY DATABASE PROCEDURE
                               FOR HDB LANGUAGE SQLSCRIPT.
      schemas =
        select schema\_name
          FROM "$ABAP.schema( DEMO\_LOGICAL\_DB\_SCHEMA )"."SCHEMAS";
    ENDMETHOD.
    
-   Another method GET\_SCHEMAS\_LOGICAL\_TO\_ABAP demonstrates how the addition [USING SCHEMA](javascript:call_link\('abapmethod_by_db_proc.htm'\)) of the statement METHOD is specified. The [logical database schema](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry") DEMO\_LOGICAL\_DB\_SCHEMA\_TO\_ABAP is defined in such a way that it allows access to the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry"). Since it is used in the method in the macro [$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)), it must be declared after USING SCHEMA.
    
    METHOD get\_schemas\_logical\_to\_abap BY DATABASE PROCEDURE
                                       FOR HDB LANGUAGE SQLSCRIPT
                                       USING SCHEMA
                                         demo\_logical\_db\_schema\_to\_abap
                                         OBJECTS scarr.
      carriers =
        select \*
          FROM "$ABAP.schema( DEMO\_LOGICAL\_DB\_SCHEMA\_TO\_ABAP )"."SCARR";
    ENDMETHOD.
    
    -   If the current ABAP database schema is mapped to the logical database schema using the predefined name :abap\_db\_schema, the full "$ABAP.schema( DEMO\_LOGICAL\_DB\_SCHEMA\_TO\_ABAP  )"., if specified, is omitted when the macro is evaluated and the ABAP database schema is accessed implicitly. The specification of scarr is checked statically against the ABAP Dictionary.
    -   If another physical database schema is mapped to the logical database schema, there must be a suitable database object SCARR in this database schema when the method is executed.