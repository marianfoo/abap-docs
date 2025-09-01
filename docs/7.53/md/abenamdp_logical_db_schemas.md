  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP Macros](javascript:call_link\('abenamdp_macros.htm'\)) → 

AMDP - Macro for Logical Schemas

Syntax

... "$ABAP.schema( \[name =\] schema\_name )" ...

Effect

Specifies the predefined [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") [](javascript:call_link\('abenlogical_schema_glosry.htm'\) "Glossary Entry")[$ABAP.schema](javascript:call_link\('abenlogical_schema_glosry.htm'\) "Glossary Entry") for a [logical schema](javascript:call_link\('abenlogical_schema_glosry.htm'\) "Glossary Entry").

In an AMDP method implemented in SQLScript, a full qualified name can be specified to access objects in a different [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry"). Here, the AMDP framework supports the [logical schemas](javascript:call_link\('abenlogical_database_schemas.htm'\)) for the SAP HANA database. The AMDP macro $ABAP.schema can be used to specify a logical schema to which a physical name is mapped instead of the physical name of a database schema.

-   If an explicit name of a physical database schema is mapped to the logical schema specified using schema\_name, the ABAP runtime environment replaces this expression (including the quotation marks) with the physical database schema in the implementation on the database. The specified logical schema is not case-sensitive, but the mapped physical database schema is.

-   If the predefined name :abap\_db\_schema is used to map the current [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") to a [logical database schema](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry") specified using schema\_name, the ABAP runtime environment removes the full database schema and the current ABAP database schema is accessed implicitly.

The specified logical schema must exist as a [logical database schema](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry") or as a [logical HDI container](javascript:call_link\('abenlogical_hdi_container_glosry.htm'\) "Glossary Entry"). If a physical database schema is mapped to the logical schema, the physical schema must exist on the current database. If no physical database schema is mapped to the logical schema, a syntax check warning occurs. When the AMDP method is executed, an exception of the class CX\_AMDP\_DBPROC\_GENERATE\_FAILED is raised.

If the mapping of the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") is allowed for a [logical database schema](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry"), the addition [USING SCHEMA](javascript:call_link\('abapmethod_by_db_proc.htm'\)) must be specified for the logical database schema in the implementation of the AMDP method.

Notes

-   When database objects in the current database schema are accessed, the name of this schema cannot be specified explicitly (either directly or using logical schemas) More specifically, the logical schema with the predefined name SAP\_ABAP cannot be used. A logical database schema to which the ABAP database schema is mapped using the predefined name :abap\_db\_schema can, however, be used.

-   If a logical database schema is deleted or the mapping of a physical database schema is modified, the ABAP runtime environment checks all consumer AMDP classes.

-   In AMDP, a [logical HDI container](javascript:call_link\('abenlogical_hdi_container_glosry.htm'\) "Glossary Entry") can be used for simple access to [](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry")[XSA](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") [](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry")[HDI](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") objects in an [ABAP-managed HDI container](javascript:call_link\('abenamhc_glosry.htm'\) "Glossary Entry").

Executable Example

[Access to Database Schemas](javascript:call_link\('abenamdp_db_schema_abexa.htm'\))