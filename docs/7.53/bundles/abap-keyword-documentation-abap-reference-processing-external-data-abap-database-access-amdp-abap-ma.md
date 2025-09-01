# ABAP Keyword Documentation / ABAP − Reference / Processing External Data / ABAP Database Access / AMDP - ABAP Managed Database Procedures / AMDP Macros

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenamdp_macros.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_macros.htm)
- [abenamdp_abap_types.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_abap_types.htm)
- [abenamdp_logical_db_schemas.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_logical_db_schemas.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.203Z

---

### abenamdp_macros.htm

> **📖 Official SAP Documentation**: [abenamdp_macros.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_macros.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) → 

AMDP Macros

Syntax

... "$ABAP.macro( ... )" ...

Effect

Specifies an [](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry")[AMDP](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") macro in an AMDP method, which is implemented in an [SQLScript](javascript:call_link\('abenamdp_hdb_sqlscript.htm'\)). An AMDP macro is always specified in double quotation marks and always introduced with $ABAP. The macro itself is specified with macro. The relevant parameters for the chosen macro can be specified in the parentheses. The format for $ABAP is case-sensitive. The format for macro is not case-sensitive.

The ABAP runtime environment replaces a AMDP, including the quotation marks, during the implementation on the database, in accordance with the rule for the relevant macro. The following macros are currently predefined:

-   [$ABAP.type](javascript:call_link\('abenamdp_abap_types.htm'\)) for ABAP types

-   [$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)) for logical schemas

No other macros can be specified. In particular, no custom macros can be defined.

Notes

-   The syntax for macros is currently only possible in the implementation language [SQLScript](javascript:call_link\('abenamdp_hdb_sqlscript.htm'\)).

-   Macros, which are specified in comments or in single quotation marks, are not replaced.

Continue
[AMDP - Macro for ABAP Types](javascript:call_link\('abenamdp_abap_types.htm'\))
[AMDP - Macro for Logical Schemas](javascript:call_link\('abenamdp_logical_db_schemas.htm'\))



**📖 Source**: [abenamdp_macros.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_macros.htm)

### abenamdp_abap_types.htm

> **📖 Official SAP Documentation**: [abenamdp_abap_types.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_abap_types.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP Macros](javascript:call_link\('abenamdp_macros.htm'\)) → 

AMDP - Macro for ABAP Types

Syntax

... "$ABAP.type( \[name =\] abap\_type )" ...

Effect

Specifies the predefined [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") $ABAP.type for an ABAP type.

In an AMDP method implemented in SQLScript, the AMDP macro $ABAP.type can be used to access the ABAP type abap\_type. For abap\_type, all [elementary](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") non- [generic](javascript:call_link\('abengeneric_data_type_glosry.htm'\) "Glossary Entry") types can be specified that are possible after a TYPE addition in an ABAP implementation of the method. These are as follows:

-   The [built-in ABAP types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) i, int8, decfloat16, decfloat34, f, string, xstring, d and t.

-   All visible elementary types, which are defined with [TYPES](javascript:call_link\('abaptypes.htm'\)) at this place, and which are of their own class, a different class or an interface.

-   All elementary types defined in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) such as data elements or elementary components of structured types.

The ABAP runtime environment replaces this expression in accordance with the rules specified in the [mapping tables](javascript:call_link\('abenamdp_hdb_sqlscript_mapping.htm'\)) in the corresponding HANA type. abap\_type is not case-sensitive.

Examples

The following table shows how some built-in or self-defined ABAP types can be specified in macro $ABAP.type and implemented in HANA types.

Macro

Conversion

"$ABAP.type( int8 )"

BIGINT

"$ABAP.type( string )"

NCLOB

"$ABAP.type( cl\_abap\_docu=>name )"

NVARCHAR (70)

"$ABAP.type( sy-mandt )"

NVARCHAR (3)

"$ABAP.type( s\_carrname )"

NVARCHAR (20)

Executable Example

[Access to ABAP Types](javascript:call_link\('abenamdp_abap_types_abexa.htm'\))



**📖 Source**: [abenamdp_abap_types.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_abap_types.htm)

### abenamdp_logical_db_schemas.htm

> **📖 Official SAP Documentation**: [abenamdp_logical_db_schemas.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_logical_db_schemas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenamdp_logical_db_schemas.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_logical_db_schemas.htm)


  

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
