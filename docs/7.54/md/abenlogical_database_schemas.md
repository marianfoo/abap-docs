  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) → 

Logical Schemas for SAP HANA

A [logical schema](javascript:call_link\('abenlogical_schema_glosry.htm'\) "Glossary Entry") is a symbolic name for a [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") that can be used in an [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry").

-   [Definition](#@@ITOC@@ABENLOGICAL_DATABASE_SCHEMAS_1)

-   [Mapping of Physical Database Schemas](#@@ITOC@@ABENLOGICAL_DATABASE_SCHEMAS_2)

-   [Mapping to a Logical Database Schema](#@@ITOC@@ABENLOGICAL_DATABASE_SCHEMAS_3)

-   [Mapping to a Logical HDI Container](#@@ITOC@@ABENLOGICAL_DATABASE_SCHEMAS_4)

-   [Use](#@@ITOC@@ABENLOGICAL_DATABASE_SCHEMAS_5)

Definition

There are two types of logical schema:

-   Logical database schema

A [logical database schema](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry") makes it possible to map a physical database schema in a mapping table. A logical database schema is represented by a transportable [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that developers must create in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The repository object has the following attributes:

-   A name used to map a physical database schema to the object, so making the object usable.

-   An optional flag that permits the mapping of the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry").

Developers with development authorization can create and modify a logical database schema as a repository object.

-   Logical HDI Container

A [logical HDI container](javascript:call_link\('abenlogical_hdi_container_glosry.htm'\) "Glossary Entry") is part of the definition of an [ABAP-managed HDI container (AMHC)](javascript:call_link\('abenamhc_glosry.htm'\) "Glossary Entry"), namely a [HDI container](javascript:call_link\('abenhdi_container_glosry.htm'\) "Glossary Entry") managed by ABAP. A logical HDI container does not have a repository object.

Mapping of Physical Database Schemas

Mappings of physical database schemas to logical database schemas can be distinguished from mappings of physical database schemas to logical HDI schemas.

Mapping to a Logical Database Schema

The mapping of physical database schema to an existing logical database schema is defined in the mapping table AMDP\_SCHEMA\_MAP in the documented transaction DB\_SCHEMA\_MAP. A mapping of this type is currently only possible on an AS ABAP whose [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") is a SAP HANA database. The physical database schema is case-sensitive.

A mapping made using the transaction DB\_SCHEMA\_MAP is usually a local mapping, but can be transported with some restrictions. Transports like this are usually only made from systems with an SAP HANA database and should only be made into systems in which the specified physical database schemas exist. Transports should only be made between systems in the same enterprise. Any mappings made by SAP are not delivered to customers. The cross-client mapping table AMDP\_SCHEMA\_MAP has the [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)) C.

An [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") is mapped using the predefined name :abap\_db\_schema:

-   This name is used as a placeholder for the real name of the ABAP database schema and can be evaluated accordingly by frameworks.

-   The associated flag must be set for the logical database schema before the mapping can take place.

Notes

-   System administrators with appropriate authorizations can map physical database schemas to logical database schemas.

-   The mappings exist in systems that do not have an SAP HANA database as a standard database, but cannot be edited and are ignored.

-   Only the predefined name :abap\_db\_schema should be used for the mapping of the current [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry"). If the associated flag is set, it would be possible to speciiy the real name, but this name cannot be transported properly and the logical database schema would not be usable in AMDP.

Mapping to a Logical HDI Container

A physical database schema is mapped to a logical HDI container in transaction SCTS\_AMHC (used to define [ABAP-managed HDI containers (AMHCs)](javascript:call_link\('abenamhc_glosry.htm'\) "Glossary Entry")). An AMHC is a special [HDI container](javascript:call_link\('abenhdi_container_glosry.htm'\) "Glossary Entry") that uses [SAP HANA Transport for ABAP (HTA)](javascript:call_link\('abenhta_glosry.htm'\) "Glossary Entry") as an interface to the [Change and Transport System (CTS)](javascript:call_link\('abencts_glosry.htm'\) "Glossary Entry") (for its [HDI objects](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") too). The logical HDI container is a symbolic name for the physical AMHC database schema. There are no entries in the mapping table AMDP\_SCHEMA\_MAP for a logical HDI container. The logical HDI containers in AS ABAP can be displayed in transaction DB\_SCHEMA\_MAP, but mappings cannot be edited.

Notes

-   Mappings of physical [HDI containers](javascript:call_link\('abenhdi_container_glosry.htm'\) "Glossary Entry") to logical HDI schemas are usually predefined in a system.

-   The database schema of a [AMHC](javascript:call_link\('abenamhc_glosry.htm'\) "Glossary Entry") is never the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry").

Use

A logical schema can be used by frameworks for variable access to a physical database schema in Native SQL. More specifically, the use of logical schemas is are supported by the [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenabap_managed_db_proc_glosry.htm'\) "Glossary Entry"):

-   A special [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") ([$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\))) can be used in [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") to specify logical schemas. At runtime, the macro is replaced by the name of the mapped physical database schema.

-   If the current [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") is entered implicitly as a physical database schema of a logical database schema using the predefined name :abap\_db\_schema, the macro [$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)) is skipped in the evaluation and hence the current ABAP database schema accessed implicitly.

-   If the current [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") is mapped to a logical schema using its real name, it is used for the macro [$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)) in the evaluation of this macro. It is not possible to specify the current ABAP database schema explicitly in AMDP, which means that a syntax error occurs.

Notes

-   If a logical database schema to which the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") is mapped is used in the macro [$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)), the schema must be declared using the addition [USING SCHEMA](javascript:call_link\('abapmethod_by_db_proc.htm'\)) of the statement METHOD in the current AMDP emthod. Conversely, this addition can only be used for logical database schemas to wohic the ABAP database schema can be mapped. For this reason, if the flag that allows mappings of the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") is changed for an existing logical database schema, syntax errors are incurred in [AMDP classes](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") that already use this schema.

-   [Logical HDI containers](javascript:call_link\('abenlogical_hdi_container_glosry.htm'\) "Glossary Entry") are used in the macro [$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)) for simple access to [HDI objects](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") in [SAP HANA XSA](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry").

-   The transaction DB\_SCHEMA\_MAP also displays a logical schema with the predefined name SAP\_ABAP to which the current [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") is always mapped. This schema is only for internal [HDI](javascript:call_link\('abenhdi_glosry.htm'\) "Glossary Entry") use and cannot be used in the [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") [$ABAP.schemas](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)).