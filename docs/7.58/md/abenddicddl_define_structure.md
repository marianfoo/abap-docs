---
title: "DDIC DDL - DEFINE STRUCTURE"
description: |
  Syntax structure_annos(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_props.htm) ext_annos(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_ext_annos.htm) DEFINE STRUCTURE struct  ... component;(https://help.sap.com/doc/abap
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_structure.htm"
abapFile: "abenddicddl_define_structure.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenddicddl", "define", "structure"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_define_structure.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20ABENDDICDDL_DEFINE_STRUCTURE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC DDL - DEFINE STRUCTURE

Syntax

[structure\_annos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_props.htm)
[ext\_annos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_ext_annos.htm)
DEFINE STRUCTURE struct {
  ...
  [component;](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_comps.htm)
  ...
  [include;](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_incl.htm)
  ...
}

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement for defining an ABAP Dictionary [DDIC structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures.htm) struct in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry").

-   A structure is defined using the statement DEFINE STRUCTURE. The name struct is subject to the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_types_names.htm).
-   [Annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_annotation_glosry.htm "Glossary Entry") [structure\_annos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_props.htm) in front of the statement DEFINE STRUCTURE define the mandatory structure properties.
-   Optionally, extensibility annotations [ext\_annos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_ext_annos.htm) can be specified in front of the statement DEFINE STRUCTURE. These annotations are a prerequisite for [C0 release of a DDIC structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_ddic.htm).
-   The structure components are defined in a semicolon-separated list in curly brackets { } by one of the following methods:
    -   Defining individual components [component](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_comps.htm)
    -   Including include structures [include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_incl.htm)

Hints

-   As in the [CDS syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_general_syntax_rules.htm), an ABAP Dictionary structure definition can contain comments after // and between /\* ... \*/.
-   A more detailed description of the syntax is available in the ADT documentation [Syntax of ABAP Dictionary Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/fc6cd6f7d02f4546a33feb3f5fc9dd66).

Example

Definition of the structure DEMOFLI in ADT.

@EndUserText.label : 'Structure for ALV Demo'
@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE
define structure demofli {
  fldate   : s\_date;
  seatsmax : s\_seatsmax;
  seatsocc : s\_seatsocc;
}

Continue
[DDIC DDL - DEFINE STRUCTURE, structure\_annos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_props.htm)
[DDIC DDL - DEFINE STRUCTURE, ext\_annos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_ext_annos.htm)
[DDIC DDL - DEFINE STRUCTURE, component](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_comps.htm)
[DDIC DDL - DEFINE STRUCTURE, include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_incl.htm)