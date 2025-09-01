---
title: "Logical Schemas for SAP HANA"
description: |
  A logical schema(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_schema_glosry.htm 'Glossary Entry') is a symbolic name for a database schema(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_schema_glosry.htm 'Glossary Entry') in the SAP HANA databa
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_database_schemas.htm"
abapFile: "abenlogical_database_schemas.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abenlogical", "database", "schemas"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_hana.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Logical%20Schemas%20for%20SAP%20HANA%2C%20ABENLOGICAL_DATABASE_SCHEMAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Logical Schemas for SAP HANA

A [logical schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_schema_glosry.htm "Glossary Entry") is a symbolic name for a [database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_schema_glosry.htm "Glossary Entry") in the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") that can be used in an [AMDP macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_macro_glosry.htm "Glossary Entry").

-   [Definition](#abenlogical-database-schemas-1-------mapping-of-physical-database-schemas---@ITOC@@ABENLOGICAL_DATABASE_SCHEMAS_2)
    -   [Mapping to a Logical Database Schema](#abenlogical-database-schemas-3-----------mapping-to-a-logical-hdi-container---@ITOC@@ABENLOGICAL_DATABASE_SCHEMAS_4)
-   [Use](#@@ITOC@@ABENLOGICAL_DATABASE_SCHEMAS_5)

Definition   

There are two types of logical schema:

-   Logical database schema
    
    A [logical database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry") enables the mapping of a physical database schema in a mapping table. A logical database schema is represented by a transportable [repository object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_object_glosry.htm "Glossary Entry") that developers must create in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"). The repository object has the following properties:
    
    -   A name used to map a physical database schema to the object, so making the object usable.
    -   An optional flag that allows the mapping of the [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry").
    
    Developers with development authorization can create and modify a logical database schema as a repository object.
    
-   Logical HDI Container
    
    A [logical HDI container](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_hdi_container_glosry.htm "Glossary Entry") is part of the definition of an [ABAP-managed HDI container (AMHC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamhc_glosry.htm "Glossary Entry"), namely a [HDI container](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhdi_container_glosry.htm "Glossary Entry") managed by ABAP. A logical HDI container does not have a repository object.
    

Mapping of Physical Database Schemas   

Mappings of physical database schemas to a logical database schema differ for logical database schemas and logical HDI schemas.

Mapping to a Logical Database Schema   

A physical database schema is mapped to an existing logical database schema in the mapping table AMDP\_SCHEMA\_MAP using the documented transaction DB\_SCHEMA\_MAP. A mapping of this type is currently only possible on an AS ABAP whose [standard database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_glosry.htm "Glossary Entry") is an SAP HANA database. The physical database schema is case-sensitive.

A mapping made using the transaction DB\_SCHEMA\_MAP should usually be a local mapping but can also be transported with some restrictions. Transports like this are usually only made from systems with an SAP HANA database and should only be performed in systems in which the specified physical database schemas definitely exist. Transports should only be made between systems of the same company. Any mappings made by SAP are not delivered to customers. The client-independent mapping table AMDP\_SCHEMA\_MAP has the [delivery class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_delivery.htm) C.

An [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") is mapped using the predefined name :abap\_db\_schema:

-   This name is used as a placeholder for the real name of the ABAP database schema and can be evaluated accordingly by frameworks.
-   The associated flag must be set for the logical database schema in order for the mapping to take place.

Hints

-   System administrators with appropriate authorizations can map physical database schemas to logical database schemas.
-   The mappings exist in systems that do not have an SAP HANA database as a standard database but cannot be processed and are ignored.
-   Only the predefined name :abap\_db\_schema should be used to map the current [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry"). If the associated flag is set, the real name could also be specified, but this name cannot be transported properly and the logical database schema would not be usable in AMDP.

Mapping to a Logical HDI Container   

A physical database schema is mapped to a logical HDI container in transaction SCTS\_AMHC (used to define [ABAP-managed HDI containers (AMHCs)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamhc_glosry.htm "Glossary Entry")). An AMHC is a special [HDI container](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhdi_container_glosry.htm "Glossary Entry") that uses [SAP HANA Transport for ABAP (HTA)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhta_glosry.htm "Glossary Entry") as an interface to the [Change and Transport System (CTS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencts_glosry.htm "Glossary Entry") (for its [HDI objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhdi_object_glosry.htm "Glossary Entry") too). The logical HDI container is a symbolic name for the physical AMHC database schema. There are no entries in the mapping table AMDP\_SCHEMA\_MAP for a logical HDI container. The logical HDI containers in AS ABAP can be displayed in transaction DB\_SCHEMA\_MAP, but mappings cannot be modified.

Hints

-   Mappings of physical [HDI containers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhdi_container_glosry.htm "Glossary Entry") to logical HDI schemas are usually predefined in a system.
-   The database schema of a [AMHC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamhc_glosry.htm "Glossary Entry") is never the [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry").

Use   

A logical schema can be used by frameworks for variable access to a physical database schema in Native SQL. More specifically, the use of logical schemas is are supported by the [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_managed_db_proc_glosry.htm "Glossary Entry"):

-   A special [AMDP macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_macro_glosry.htm "Glossary Entry") ([$ABAP.schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm)) can be used in [AMDP methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry") to specify logical schemas. At runtime, the macro is replaced by the name of the mapped physical database schema.
-   If the current [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") is entered implicitly as a physical database schema of a logical database schema using the predefined name :abap\_db\_schema, the macro [$ABAP.schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm) is skipped in the evaluation and hence the current ABAP database schema accessed implicitly.
-   If the current [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") is mapped to a logical schema using its real name, it is used for the macro [$ABAP.schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm) in the evaluation of this macro. It is not possible to specify the current ABAP database schema explicitly in AMDP, which means that a syntax error occurs.

Hints

-   If a logical database schema to which the [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") is mapped is used in the macro [$ABAP.schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm), the schema must be declared using the addition [USING SCHEMA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod_by_db_proc.htm) of the statement METHOD in the current AMDP method. Conversely, this addition can only be used for logical database schemas to which the ABAP database schema can be mapped. For this reason, if the flag that allows mappings of the [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") is changed for an existing logical database schema, this leads to syntax errors in [AMDP classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_class_glosry.htm "Glossary Entry") that already use this schema.
-   [Logical HDI containers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_hdi_container_glosry.htm "Glossary Entry") are used in the macro [$ABAP.schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm) for simple access to [HDI objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhdi_object_glosry.htm "Glossary Entry") in [SAP HANA XSA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenxsa_glosry.htm "Glossary Entry").
-   The transaction DB\_SCHEMA\_MAP also displays a logical schema with the predefined name SAP\_ABAP to which the current [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") is always mapped. This schema is only for internal [HDI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhdi_glosry.htm "Glossary Entry") use and cannot be used in the [AMDP macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_macro_glosry.htm "Glossary Entry") [$ABAP.schemas](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm).