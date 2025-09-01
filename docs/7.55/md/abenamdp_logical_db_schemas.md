  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp.htm) →  [AMDP - Macros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_macros.htm) → 

AMDP - Macro for Logical Schemas

Syntax

... "$ABAP.schema( *\[*name =*\]* schema\_name
                   *\[*quote = SINGLE|DOUBLE*\]* )" ...

Effect

Specifies the predefined [AMDP macro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_macro_glosry.htm "Glossary Entry") [$ABAP.schema](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_schema_glosry.htm "Glossary Entry") for a [logical schema](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_schema_glosry.htm "Glossary Entry").

In an AMDP method implemented in SQLScript, a full qualified name can be specified to access objects in a different [database schema](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_schema_glosry.htm "Glossary Entry"). Here, the AMDP framework supports the [logical schemas](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_database_schemas.htm) for the SAP HANA database. The AMDP macro $ABAP.schema can be used to specify a logical schema to which a physical name is mapped instead of the physical name of a database schema.

-   If an explicit name of a physical database schema is mapped to the logical schema specified using schema\_name, the ABAP runtime environment replaces this expression (including the quotation marks) with the physical database schema in the implementation on the database. The specified logical schema is not case-sensitive, but the mapped physical database schema is. When replaced, the physical database schema is set in double quotation marks by default if required. This can be overwritten by the optional addition quote. If SINGLE is specified, the physical database schema is always set in single quotation marks. DOUBLE is the default behavior.

-   If the predefined name :abap\_db\_schema is used to map the current [ABAP database schema](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") to a [logical database schema](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry") specified using schema\_name, the ABAP runtime environment removes the full database schema and the current ABAP database schema is accessed implicitly. In this case, the optional addition quote cannot be specified using SINGLE, since this would enclose the empty content in single quotation marks.

The specified logical schema must exist as a [logical database schema](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry") or as a [logical HDI container](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_hdi_container_glosry.htm "Glossary Entry"). If a physical database schema is mapped to the logical schema, the physical schema must exist on the current database. If no physical database schema is mapped to the logical schema, a syntax check warning occurs. When the AMDP method is executed, an exception of the class CX\_AMDP\_DBPROC\_GENERATE\_FAILED is raised.

If the mapping of the [ABAP database schema](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") is allowed for a [logical database schema](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry"), the addition [USING SCHEMA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethod_by_db_proc.htm) must be specified for the logical database schema in the implementation of the AMDP method.

Hints

-   When database objects of the current database schema are accessed, the name of this schema must not be specified explicitly, neither directly nor using logical schemas. More specifically, the logical schema with the predefined name SAP\_ABAP cannot be used. A logical database schema to which the ABAP database schema is mapped using the predefined name :abap\_db\_schema can, however, be used.

-   If a logical database schema is deleted or the mapping of a physical database schema is modified, the ABAP runtime environment checks all consumer AMDP classes.

-   In AMDP, a [logical HDI container](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_hdi_container_glosry.htm "Glossary Entry") can be used for simple access to [XSA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxsa_glosry.htm "Glossary Entry") [HDI objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhdi_object_glosry.htm "Glossary Entry") in an [ABAP-managed HDI container](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamhc_glosry.htm "Glossary Entry").

Executable Example

[Access to Database Schemas](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_db_schema_abexa.htm)