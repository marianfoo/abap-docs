# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Database Tables / DDIC - Dictionary DDL for Defining Database Tables

Included pages: 10


### abenddic_define_table.htm

---
title: "DDIC - Dictionary DDL for Defining Database Tables"
description: |
  A DDIC database table can be displayed and modified in a source-code-based editor in the ABAP development tools for Eclipse (ADT)(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm 'Glossary Entry'), using Dictionary DDL(https://help.sap.com/doc/abapdocu_latest_in
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_table.htm"
abapFile: "abenddic_define_table.htm"
keywords: ["do", "if", "try", "data", "abenddic", "define", "table"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Dictionary%20DDL%20for%20Defining%20Database%20Tables%2C%20ABENDDIC_DEFINE_TABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

DDIC - Dictionary DDL for Defining Database Tables

A DDIC database table can be displayed and modified in a source-code-based editor in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"), using [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). The source code of a DDIC database table is not saved and transported. Instead, the source code of an existing DDIC database table is generated from the metadata of the associated system tables. Conversely, when saved, the metadata is derived directly from the source code and saved to the system tables.

-   [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm)

Hint

All properties of a DDIC database table can be defined in ADT using Dictionary DDL or in transaction SE11, with the following exceptions. The [technical properties](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_techspec.htm), which are activated and transported separately from the DDIC database table, and [secondary indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_index.htm) cannot be defined using the Dictionary DDL:

-   The [standalone table-specific technical properties of DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_techspec.htm) can be maintained in a form-based tool in ADT.
-   [Secondary indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_index.htm) can be edited in a form-based tool in ADT.
-   [Extensibility annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm), which are a prerequisite for [C0 release](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_ddic.htm), can be maintained only in ADT.

Continue
[DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm)


### abenddicddl_define_table.htm

---
title: "DDIC DDL - DEFINE TABLE"
description: |
  Syntax structure_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm) ext_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm) table_annos(https://help.sap.com/doc/abapdocu_latest_index_
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm"
abapFile: "abenddicddl_define_table.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenddicddl", "define", "table"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_table.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20TABLE%2C%20ABENDDICDDL_DEFINE_TABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC DDL - DEFINE TABLE

Syntax

[structure\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm)
[ext\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm)
[table\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_props.htm)
DEFINE TABLE dbtab {
  ...
  [field;](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm)
  ...
  [include;](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_incl.htm)
  ...
}

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement for defining an ABAP Dictionary [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) dbtab in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").

-   A DDIC database table is defined using the statement DEFINE TABLE. The name dbtab must comply with the naming rules for DDIC database tables.
-   In front of the statement DEFINE TABLE,
    -   the same mandatory structure properties must be specified as [annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_annotation_glosry.htm "Glossary Entry") [structure\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm) as in the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm).
    -   the same optional extensibility annotations [ext\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm) as in the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) are available for [C0 developer extensibility](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendev_extensibility_glosry.htm "Glossary Entry").
    -   any mandatory table properties must be specified as annotations [table\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_props.htm). Any other properties are optional.
-   The table fields are defined in a semicolon-separated list in curly brackets { } using one of the following methods:
    -   by defining single fields [field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm)
    -   by including include structures [include](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_incl.htm).

Hints

-   As in the [CDS syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_general_syntax_rules.htm), an ABAP Dictionary structure definition can contain comments after // and between /\* ... \*/.
-   For a more detailed description of the syntax, see the ADT documentation [Syntax of ABAP Dictionary Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/fc6cd6f7d02f4546a33feb3f5fc9dd66).

Example

Definition of DDIC database table DEMO\_BLOB\_TABLE in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") of the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").

@EndUserText.label : 'Table with a BLOB Column'
@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table demo\_blob\_table {
  key name : abap.sstring(255) not null;
  picture  : abap.rawstring(0);
}

Continue
[DDIC DDL - DEFINE TABLE, table\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_props.htm)
[DDIC DDL - DEFINE TABLE, field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm)
[DDIC DDL - DEFINE TABLE, include](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_incl.htm)


### abenddicddl_define_table_props.htm

---
title: "Syntax"
description: |
  @AbapCatalog.tableCategory : table_cat @AbapCatalog.dataMaintenance : data_maint @AbapCatalog.deliveryClass : deliv_class @AbapCatalog.activationType : act_type @AbapCatalog.replacementObject : '...' Effect Annotations for specifying table properties in the definition of a DDIC d
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_props.htm"
abapFile: "abenddicddl_define_table_props.htm"
keywords: ["do", "if", "try", "class", "data", "abenddicddl", "define", "table", "props"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20TABLE%2C%20table_annos%2C%20ABENDDICDDL_DEFINE_TABLE_PROPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC DDL - DEFINE TABLE, table\_annos

Syntax

@AbapCatalog.tableCategory : table\_cat
@AbapCatalog.dataMaintenance : data\_maint
@AbapCatalog.deliveryClass : deliv\_class
*\[*@AbapCatalog.activationType : act\_type*\]*
*\[*@AbapCatalog.replacementObject : '...'*\]*

Effect

Annotations for specifying table properties in the definition of a DDIC database table using the statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry").

Mandatory Definitions

-   @AbapCatalog.tableCategory defines the [table category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_tab_cat.htm). table\_cat can be specified as:
    -   #TRANSPARENT - [transparent table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransparent_table_glosry.htm "Glossary Entry")
    -   #GLOBAL\_TEMPORARY - [Global Temporary Table (GTT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry")
-   @AbapCatalog.dataMaintenance defines how [the DDIC database table is displayed and maintained](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_maint.htm). data\_maint can be specified as:
    -   #NOT\_ALLOWED - [Display/maintenance not allowed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_maint.htm)
    -   #RESTRICTED - [Display/maintenance allowed with restrictions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_maint.htm)
    -   #ALLOWED - [Display/maintenance allowed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_maint.htm)
    -   #DISPLAY - [Only display allowed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_maint.htm)
-   @AbapCatalog.deliveryClass defines the [delivery class of the database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_delivery.htm). deliv\_class can be specified as:
    -   #A - [delivery class A](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_delivery.htm)
    -   #C - [delivery class C](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_delivery.htm)
    -   #L - [delivery class L](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_delivery.htm)
    -   #G - [delivery class G](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_delivery.htm)
    -   #E - [delivery class E](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_delivery.htm)
    -   #S - [delivery class S](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_delivery.htm)
    -   #W - [delivery class W](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_delivery.htm)

Optional Definitions

-   @AbapCatalog.tableCategory defines the [activation type of the database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_act_type.htm). This setting is not relevant for DDIC database tables in application programming. act\_type can be specified as:
    -   #NOT\_CLASSIFIED - [activation type 00](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_act_type.htm)
    -   #NAMETAB\_GENERATION\_OFFLINE - [activation type 01](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_act_type.htm)
    -   #ADAPT\_C\_STRUCTURES - [activation type 02](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_act_type.htm)
    -   #INITIAL\_TABLE\_REQUIRED - [activation type 10](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_act_type.htm)
-   @AbapCatalog.replacementObject defines the name of a [replacement object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreplacement_object_glosry.htm "Glossary Entry") in quotation marks.
-   @AbapCatalog.primaryKey.invertedIndividualIndex defines the type of the [primary index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_index_glosry.htm "Glossary Entry"):
    -   true - [INVERTED INDIVIDUAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_index.htm) as of HANA2, SPS 03, [INVERTED HASH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_index.htm) before HANA2, SPS 03
    -   false - [INVERTED VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_index.htm) (default)

Example

Annotations in the definition of the DDIC database table DEMO\_SUMDIST in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") of the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). This table has the CDS view DEMO\_CDS\_SUMDIST as its [replacement object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreplacement_object_glosry.htm "Glossary Entry").

@EndUserText.label : 'Aggregation Table with Replacement Object'
@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #LIMITED
@AbapCatalog.replacementObject : 'demo\_cds\_sumdist'
define table demo\_sumdist {
  key client   : mandt not null;
  key carrname : s\_carrname not null;
  key distid   : s\_distid not null;
  @Semantics.quantity.unitOfMeasure : 'demo\_sumdist.distid'
  sum\_distance : s\_distance; }


### abenddicddl_define_table_comps.htm

---
title: "DDIC DDL - DEFINE TABLE, field"
description: |
  Syntax component_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm) foreign_key_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm) geo_annos(https://help.sa
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm"
abapFile: "abenddicddl_define_table_comps.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenddicddl", "define", "table", "comps"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20TABLE%2C%20field%2C%20ABENDDICDDL_DEFINE_TABLE_COMPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

DDIC DDL - DEFINE TABLE, field

Syntax

*\[*[component\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm)*\]*
*\[*[foreign\_key\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm)*\]*
*\[*[geo\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_srprps.htm)*\]*
*\[*KEY*\]* field : *{*data\_element *\[*[foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm)*\]*
*\[*[value\_help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_valuhelp.htm)*\]**}*
              *|*abap. [type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)*\[*(n)*|*(n,m)*\]*
              *\[*NOT NULL*\]*;

Effect

Defines a single [database field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_techstruc.htm) in the definition of a DDIC database table using the [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm).

-   In front of the field, annotations [component\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm) can be used to specify the same optional component properties as in the definition of a structure using [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm).
-   [foreign\_key\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm) can be used to specify the properties of a foreign key dependency defined with [foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm).
-   [geo\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_srprps.htm) specify the properties of a component with the [geodata type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeo_data_type_glosry.htm "Glossary Entry") GEOM\_EWKB.
-   The addition KEY defines the table field as a [key field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_key.htm).
-   field defines the name of the database field.
-   data\_element or abap.type is used to define the data type of the table field. The same rules apply as in the definition of a [structure component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm), except that only elementary types can be specified here.
-   The addition NOT NULL is used to set the [flag for initial values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_init.htm).
-   The addition [foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm) can be used to define a [foreign key dependency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkeyrel.htm) for a table field. As a prerequisite, the table field must be typed using a data element.
-   The addition [value\_help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_valuhelp.htm) can be used to assign a search help to a table field whose data type is defined using a data element. This is only useful for table fields used for input fields of dynpros or Web Dynpros (which is not recommended) and the same applies as in the definition of a [structure component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm).

Example

Definition of DDIC database table DEMO\_EXPRESSIONS in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") of the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). The types of all fields are determined directly using built-in data types in the ABAP Dictionary.

@EndUserText.label : 'Database table for Expression Examples'
@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #ALLOWED
define table demo\_expressions {
  key mandt  : mandt not null;
  key id     : char1 not null;
  num1       : abap.int4;
  num2       : abap.int4;
  numlong1   : abap.int8;
  numlong2   : abap.int8;
  dec1       : abap.dec(31,0);
  dec2       : abap.dec(31,10);
  dec3       : abap.dec(10,3);
  fltp1      : abap.fltp;
  fltp2      : abap.fltp;
  decf1      : abap.df34\_dec(31,0);
  decf2      : abap.df34\_dec(31,0);
  char1      : abap.char(10);
  char2      : abap.char(10);
  numc1      : abap.numc(10);
  numc2      : abap.numc(10);
  string1    : abap.string(0);
  string2    : abap.string(0);
  raw1       : abap.raw(10);
  raw2       : abap.raw(10);
  xstring1   : abap.rawstring(0);
  xstring2   : abap.rawstring(0);
  dats1      : abap.dats;
  dats2      : abap.dats;
  tims1      : abap.tims;
  tims2      : abap.tims;
  timestamp1 : abap.dec(15,0);
  timestamp2 : abap.dec(15,0); }

Continue
[DDIC DDL - DEFINE TABLE, foreign\_key\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm)
[DDIC DDL - DEFINE TABLE, foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm)
[DDIC DDL - DEFINE TABLE, geo\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_srprps.htm)


### abenddicddl_define_table_fkprps.htm

---
title: "Syntax"
description: |
  @AbapCatalog.foreignKey.label : '...' @AbapCatalog.foreignKey.keyType : key_type @AbapCatalog.foreignKey.screenCheck : truefalse @AbapCatalog.foreignKey.messageClass : msg_cls @AbapCatalog.foreignKey.messageNumber : msg_no Effect Annotations used to spec
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm"
abapFile: "abenddicddl_define_table_fkprps.htm"
keywords: ["do", "if", "try", "class", "data", "abenddicddl", "define", "table", "fkprps"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) →  [DDIC DDL - DEFINE TABLE, field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20TABLE%2C%20foreign_key_annos%2C%20ABENDDICDDL_DEFINE_TABLE_FKPRPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

DDIC DDL - DEFINE TABLE, foreign\_key\_annos

Syntax

*\[*@AbapCatalog.foreignKey.label : '...'*\]*
*\[*@AbapCatalog.foreignKey.keyType : key\_type*\]*
*\[*@AbapCatalog.foreignKey.screenCheck : true*|*false*\]*
*\[*@AbapCatalog.foreignKey.messageClass : msg\_cls*\]*
*\[*@AbapCatalog.foreignKey.messageNumber : msg\_no*\]*

Effect

Annotations used to specify properties for a [foreign key dependency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry") of a [table field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm) defined using [foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm) in the definition of a DDIC database table using the [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm).

-   In quotation marks, @AbapCatalog.foreignKey.label defines the short text of the foreign key in the original language of the database table.
-   @AbapCatalog.foreignKey.keyType defines the [type of the foreign key fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm). key\_type can be specified as:
    -   #NON\_KEY - [No key fields/candidates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm)
    -   #KEY - [Key fields/candidates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm)
    -   #TEXT\_KEY - [Key fields of a text table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm)
-   @AbapCatalog.foreignKey.screenCheck enables or disables the foreign key dependency for the [input check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm).
-   @AbapCatalog.foreignKey.messageClass and @AbapCatalog.foreignKey.messageNumber specify the message class msg\_class and message number msg\_no for the [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry") of the [input check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm).

Example

See [foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm).


### abenddicddl_define_table_forkey.htm

---
title: "Syntax"
description: |
  ...  WITH FOREIGN KEY n,m check_table WHERE check_field1 = dbtab.field1 AND check_field2 = dbtab.field2 ... ... Effect Assigns a check table(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_checktab.htm) to a table field(https://help
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm"
abapFile: "abenddicddl_define_table_forkey.htm"
keywords: ["do", "if", "try", "data", "abenddicddl", "define", "table", "forkey"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) →  [DDIC DDL - DEFINE TABLE, field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20TABLE%2C%20foreign_key%2C%20ABENDDICDDL_DEFINE_TABLE_FORKEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

DDIC DDL - DEFINE TABLE, foreign\_key

Syntax

...  WITH FOREIGN KEY *\[*\[n,m\]*\]* check\_table
       WHERE check\_field1 = dbtab.field1
         *\[*AND check\_field2 = dbtab.field2 ...*\]* ...

Effect

Assigns a [check table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_checktab.htm) to a [table field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm) whose data type is defined by a data element in the definition of a DDIC database table using the [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm). check\_table must be an existing DDIC database table. This statement turns check\_table into a check table and turns the current DDIC database table into a [foreign key table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_table_glosry.htm "Glossary Entry"). The current table field is turned into a [foreign key field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_field_glosry.htm "Glossary Entry") of the [foreign key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm) of the current table.

-   Fields of the check table must be assigned to the foreign key fields of the foreign key table after WHERE.
-   \[n,m\] can be used to define the [cardinality](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencardinality_glosry.htm "Glossary Entry") of the [foreign key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm).
    -   The possible values for n are 1 for [1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm) and \[0..1\] for [C](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm).
    -   The possible values for m are 1 for [1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm), \[0..1\] for [C](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm), \[1..\*\] for [N](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm), and \[0..\*\] for [CN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm).

Further properties of the foreign key can be specified using [foreign\_key\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm).

Hint

The addition WITH FOREIGN KEY can be used, with the same meaning, in the definition of a structure using [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm).

Example

Dictionary DDL for specifying the check table SCARR of the foreign key field CARRID of the foreign key table SPFLI.

...
define table spfli {
  ...
  @AbapCatalog.foreignKey.label : 'Check Against Airline'
  @AbapCatalog.foreignKey.keyType : #KEY
  @AbapCatalog.foreignKey.screenCheck : true
  key carrid : s\_carr\_id not null
    with foreign key \[0..\*,1\] scarr
      where mandt = spfli.mandt
        and carrid = spfli.carrid;
  ...
}


### abenddicddl_define_table_srprps.htm

---
title: "Syntax"
description: |
  @AbapCatalog.geo.spatialRefSystem : 'id' Effect Specifies a property for table fields with the geodata type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeo_data_type_glosry.htm 'Glossary Entry') GEOM_EWKB. Currently, the annotation @AbapCatalog.geo.spatialRefSystem is avai
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_srprps.htm"
abapFile: "abenddicddl_define_table_srprps.htm"
keywords: ["insert", "do", "if", "try", "data", "abenddicddl", "define", "table", "srprps"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) →  [DDIC DDL - DEFINE TABLE, field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20TABLE%2C%20geo_annos%2C%20ABENDDICDDL_DEFINE_TABLE_SRPRPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

DDIC DDL - DEFINE TABLE, geo\_annos

Syntax

@AbapCatalog.geo.spatialRefSystem : 'id'

Effect

Specifies a property for table fields with the [geodata type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeo_data_type_glosry.htm "Glossary Entry") GEOM\_EWKB.

Currently, the annotation @AbapCatalog.geo.spatialRefSystem is available. This annotation is used to specify the ID id of a [spatial reference system](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_sptlrf.htm) as an integer value in quotation marks. If the annotation is not specified, the default value 0 is used implicitly and the annotation inserted accordingly. The spatial reference system can no longer be modified after activation.

Hints

-   The program ABAP\_DOCU\_SHOW\_SPATIAL\_REF\_SYS shows the spatial reference systems that are available in the current system.
-   Spatial reference systems are not managed by ABAP. A spatial reference system that is available in one system is not necessarily available in a follow-up system.

Example

Annotation @AbapCatalog.geo.spatialRefSystem for a table field LOCATION of a DDIC database table.

...
define table ... {
  ...
  @AbapCatalog.geo.spatialRefSystem : '4326'
  location  : abap.geom\_ewkb;
  ...
}


### abenddicddl_define_table_comps.htm

---
title: "DDIC DDL - DEFINE TABLE, field"
description: |
  Syntax component_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm) foreign_key_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm) geo_annos(https://help.sa
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm"
abapFile: "abenddicddl_define_table_comps.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenddicddl", "define", "table", "comps"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20TABLE%2C%20field%2C%20ABENDDICDDL_DEFINE_TABLE_COMPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

DDIC DDL - DEFINE TABLE, field

Syntax

*\[*[component\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm)*\]*
*\[*[foreign\_key\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm)*\]*
*\[*[geo\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_srprps.htm)*\]*
*\[*KEY*\]* field : *{*data\_element *\[*[foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm)*\]*
*\[*[value\_help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_valuhelp.htm)*\]**}*
              *|*abap. [type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)*\[*(n)*|*(n,m)*\]*
              *\[*NOT NULL*\]*;

Effect

Defines a single [database field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_techstruc.htm) in the definition of a DDIC database table using the [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm).

-   In front of the field, annotations [component\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm) can be used to specify the same optional component properties as in the definition of a structure using [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm).
-   [foreign\_key\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm) can be used to specify the properties of a foreign key dependency defined with [foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm).
-   [geo\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_srprps.htm) specify the properties of a component with the [geodata type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeo_data_type_glosry.htm "Glossary Entry") GEOM\_EWKB.
-   The addition KEY defines the table field as a [key field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_key.htm).
-   field defines the name of the database field.
-   data\_element or abap.type is used to define the data type of the table field. The same rules apply as in the definition of a [structure component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm), except that only elementary types can be specified here.
-   The addition NOT NULL is used to set the [flag for initial values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_init.htm).
-   The addition [foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm) can be used to define a [foreign key dependency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkeyrel.htm) for a table field. As a prerequisite, the table field must be typed using a data element.
-   The addition [value\_help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_valuhelp.htm) can be used to assign a search help to a table field whose data type is defined using a data element. This is only useful for table fields used for input fields of dynpros or Web Dynpros (which is not recommended) and the same applies as in the definition of a [structure component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm).

Example

Definition of DDIC database table DEMO\_EXPRESSIONS in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") of the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). The types of all fields are determined directly using built-in data types in the ABAP Dictionary.

@EndUserText.label : 'Database table for Expression Examples'
@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #ALLOWED
define table demo\_expressions {
  key mandt  : mandt not null;
  key id     : char1 not null;
  num1       : abap.int4;
  num2       : abap.int4;
  numlong1   : abap.int8;
  numlong2   : abap.int8;
  dec1       : abap.dec(31,0);
  dec2       : abap.dec(31,10);
  dec3       : abap.dec(10,3);
  fltp1      : abap.fltp;
  fltp2      : abap.fltp;
  decf1      : abap.df34\_dec(31,0);
  decf2      : abap.df34\_dec(31,0);
  char1      : abap.char(10);
  char2      : abap.char(10);
  numc1      : abap.numc(10);
  numc2      : abap.numc(10);
  string1    : abap.string(0);
  string2    : abap.string(0);
  raw1       : abap.raw(10);
  raw2       : abap.raw(10);
  xstring1   : abap.rawstring(0);
  xstring2   : abap.rawstring(0);
  dats1      : abap.dats;
  dats2      : abap.dats;
  tims1      : abap.tims;
  tims2      : abap.tims;
  timestamp1 : abap.dec(15,0);
  timestamp2 : abap.dec(15,0); }

Continue
[DDIC DDL - DEFINE TABLE, foreign\_key\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm)
[DDIC DDL - DEFINE TABLE, foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm)
[DDIC DDL - DEFINE TABLE, geo\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_srprps.htm)


### abenddicddl_define_table_incl.htm

---
title: "DDIC DDL - DEFINE TABLE, include"
description: |
  Syntax KEY group : INCLUDE struct WITH SUFFIX suffix NOT NULL ... extend(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm) ...; Effect Includes an include structure(https://help.sap.com/doc/abapdocu_lat
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_incl.htm"
abapFile: "abenddicddl_define_table_incl.htm"
keywords: ["insert", "do", "if", "try", "data", "abenddicddl", "define", "table", "incl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20TABLE%2C%20include%2C%20ABENDDICDDL_DEFINE_TABLE_INCL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

DDIC DDL - DEFINE TABLE, include

Syntax

*\[*KEY*\]* *\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]* *\[*NOT NULL*\]*
                  *\[*...
                   [extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm)
                   ...*\]*;

Effect

Includes an [include structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_include_structure.htm) in the definition of a DDIC database table with the statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). The same applies as to [including](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_incl.htm) include structures into structures with the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm), except that the include structures must be suitable for DDIC database tables.

Additionally, the additions KEY and NOT NULL can be used:

-   By using KEY all fields of the included structure are flagged as [key fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_key.htm). The include structure must then be inserted between the existing key fields or directly after them. The key attribute of the individual fields of an included structure does not have an effect. Either all fields are included as key fields or none.
-   By using NOT NULL the [flag for initial values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_init.htm) is set for the included structure. When used, those fields in the include structure for which this attribute is set also keep their attribute, but it is not switched on for fields where the attribute is not set. If the flag for initial values is not set for the included include structure, this attribute is removed for all fields.


### abenddicddl_define_table.htm

---
title: "DDIC DDL - DEFINE TABLE"
description: |
  Syntax structure_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm) ext_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm) table_annos(https://help.sap.com/doc/abapdocu_latest_index_
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm"
abapFile: "abenddicddl_define_table.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenddicddl", "define", "table"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_table.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20TABLE%2C%20ABENDDICDDL_DEFINE_TABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC DDL - DEFINE TABLE

Syntax

[structure\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm)
[ext\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm)
[table\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_props.htm)
DEFINE TABLE dbtab {
  ...
  [field;](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm)
  ...
  [include;](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_incl.htm)
  ...
}

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement for defining an ABAP Dictionary [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) dbtab in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").

-   A DDIC database table is defined using the statement DEFINE TABLE. The name dbtab must comply with the naming rules for DDIC database tables.
-   In front of the statement DEFINE TABLE,
    -   the same mandatory structure properties must be specified as [annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_annotation_glosry.htm "Glossary Entry") [structure\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm) as in the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm).
    -   the same optional extensibility annotations [ext\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm) as in the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) are available for [C0 developer extensibility](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendev_extensibility_glosry.htm "Glossary Entry").
    -   any mandatory table properties must be specified as annotations [table\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_props.htm). Any other properties are optional.
-   The table fields are defined in a semicolon-separated list in curly brackets { } using one of the following methods:
    -   by defining single fields [field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm)
    -   by including include structures [include](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_incl.htm).

Hints

-   As in the [CDS syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_general_syntax_rules.htm), an ABAP Dictionary structure definition can contain comments after // and between /\* ... \*/.
-   For a more detailed description of the syntax, see the ADT documentation [Syntax of ABAP Dictionary Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/fc6cd6f7d02f4546a33feb3f5fc9dd66).

Example

Definition of DDIC database table DEMO\_BLOB\_TABLE in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") of the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").

@EndUserText.label : 'Table with a BLOB Column'
@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table demo\_blob\_table {
  key name : abap.sstring(255) not null;
  picture  : abap.rawstring(0);
}

Continue
[DDIC DDL - DEFINE TABLE, table\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_props.htm)
[DDIC DDL - DEFINE TABLE, field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_comps.htm)
[DDIC DDL - DEFINE TABLE, include](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_incl.htm)
