---
title: "AMDP - Access to Database Schemas"
description: |
  Demonstrates access to tables in explicitly specified database schemas(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_schema_glosry.htm 'Glossary Entry'). Source Code  Public class definition CLASS cl_demo_amdp_db_schema_access DEFINITION INHERITING FROM cl_demo_c
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_db_schema_abexa.htm"
abapFile: "abenamdp_db_schema_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abenamdp", "schema", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm) →  [AMDP - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Access%20to%20Database%20Schemas%2C%20ABENAMDP_DB_SCHEMA_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP - Access to Database Schemas

Demonstrates access to tables in explicitly specified [database schemas](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_schema_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_amdp\_db\_schema\_access DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_amdp\_db\_schema\_access IMPLEMENTATION.
  METHOD main.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      out->write(
        \`Current database system does not support AMDP procedures\` ).
      RETURN.
    ENDIF.
    TRY.
        cl\_demo\_amdp\_db\_schema=>get\_schemas\_physical(
          IMPORTING schemas = FINAL(schemas\_test) ).
      CATCH cx\_amdp\_error INTO DATA(amdp\_error).
        out->write( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    TRY.
        cl\_demo\_amdp\_db\_schema=>get\_schemas\_logical(
          IMPORTING schemas = FINAL(schemas) ).
      CATCH cx\_amdp\_error INTO amdp\_error.
        out->write( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    ASSERT schemas\_test = schemas.
    out->write( schemas ).
    TRY.
        cl\_demo\_amdp\_db\_schema=>get\_schemas\_logical\_to\_abap(
          IMPORTING carriers = FINAL(carriers) ).
      CATCH cx\_amdp\_error INTO amdp\_error.
        out->write( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    out->write( carriers ).
  ENDMETHOD.
ENDCLASS.

Description   

This example accesses [AMDP methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry") that are declared and implemented in the [AMDP class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_class_glosry.htm "Glossary Entry") CL\_DEMO\_AMDP\_DB\_SCHEMA.

-   The method GET\_SCHEMAS\_PHYSICAL accesses the table SCHEMAS of the physical database schema SYS by specifying the schema directly. All existing database schema are stored in this table.
    
    METHOD get\_schemas\_physical BY DATABASE PROCEDURE
                                FOR HDB LANGUAGE SQLSCRIPT.
      schemas =
        select schema\_name
          FROM "SYS"."SCHEMAS";
    ENDMETHOD.
    
-   The method GET\_SCHEMAS\_LOGICAL accesses the physical database schema that is mapped to the [logical database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry") DEMO\_LOGICAL\_DB\_SCHEMA in transaction DB\_SCHEMA\_MAP by specifying the [AMDP macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_macro_glosry.htm "Glossary Entry") [$ABAP.schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm). If this is SYS, the same table is accessed.
    
    METHOD get\_schemas\_logical BY DATABASE PROCEDURE
                               FOR HDB LANGUAGE SQLSCRIPT.
      schemas =
        select schema\_name
          FROM "$ABAP.schema( DEMO\_LOGICAL\_DB\_SCHEMA )"."SCHEMAS";
    ENDMETHOD.
    
-   Another method GET\_SCHEMAS\_LOGICAL\_TO\_ABAP demonstrates how the addition [USING SCHEMA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod_by_db_proc.htm) of the statement METHOD is specified. The [logical database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry") DEMO\_LOGICAL\_DB\_SCHEMA\_TO\_ABAP is defined in such a way that it allows access to the [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry"). Since it is used in the method in the macro [$ABAP.schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm), it must be declared after USING SCHEMA.
    
    METHOD get\_schemas\_logical\_to\_abap BY DATABASE PROCEDURE
                                       FOR HDB LANGUAGE SQLSCRIPT
                                       USING SCHEMA
                                         demo\_logical\_db\_schema\_to\_abap
                                         OBJECTS scarr.
      carriers =
        select \*
          FROM "$ABAP.schema( DEMO\_LOGICAL\_DB\_SCHEMA\_TO\_ABAP )"."SCARR";
    ENDMETHOD.
    
    -   If the current ABAP database schema is mapped to the logical database schema using the predefined name :abap\_db\_schema, the full string "$ABAP.schema( DEMO\_LOGICAL\_DB\_SCHEMA\_TO\_ABAP  )". is omitted when the macro is evaluated and the ABAP database schema is accessed implicitly. The specification of scarr is checked statically against the ABAP Dictionary.
    -   If another physical database schema is mapped to the logical database schema, there must be a suitable database object SCARR in this database schema when the method is executed.