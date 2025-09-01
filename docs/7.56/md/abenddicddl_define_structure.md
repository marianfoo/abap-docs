  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_define_structure.htm) → 

DDIC DDL - DEFINE STRUCTURE

Syntax

[structure\_annos](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_props.htm)
DEFINE STRUCTURE struct {
  ...
  [component;](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_comps.htm)
  ...
  [include;](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_incl.htm)
  ...
}

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement for defining an ABAP Dictionary [DDIC structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures.htm) struct in the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry").

-   A structure is defined using the statement DEFINE STRUCTURE. The usual restrictions for ABAP Dictionary [data types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_types.htm) apply to the name struct.
-   The mandatory structure properties must be specified as annotations [structure\_annos](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_props.htm) in front of the statement DEFINE STRUCTURE.
-   The structure components are defined in a semicolon-separated list in curly brackets { } by one of the following methods:
    -   Defining individual components [component](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_comps.htm)
    -   Including include structures [include](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_incl.htm)

Hints

-   As in the [CDS syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_general_syntax_rules.htm), an ABAP Dictionary structure definition can contain comments after // and between /\* ... \*/.
-   A more detailed description of the syntax is available in the ADT documentation Syntax of ABAP Dictionary Objects.

Example

Defines the structure DEMOFLI in the ADT.

@EndUserText.label : 'Structure for ALV Demo'
@AbapCatalog.enhancementCategory : #NOT\_EXTENSIBLE
define structure demofli {
  fldate   : s\_date;
  seatsmax : s\_seatsmax;
  seatsocc : s\_seatsocc; }

Continue
[DDIC DDL - DEFINE STRUCTURE, structure\_annos](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_props.htm)
[DDIC DDL - DEFINE STRUCTURE, component](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_comps.htm)
[DDIC DDL - DEFINE STRUCTURE, include](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_incl.htm)