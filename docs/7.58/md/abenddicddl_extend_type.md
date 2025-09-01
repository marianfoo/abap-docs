  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_enhancements.htm) →  [DDIC - Append Structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_append_structures.htm) →  [DDIC - Dictionary DDL for Structure Extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_extend_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20EXTEND%20TYPE%2C%20ABENDDICDDL_EXTEND_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC DDL - EXTEND TYPE

Syntax

[structure\_annos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_props.htm)
EXTEND TYPE struct*|*dbtab WITH append\_struct {
  ...
  [component](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_comps.htm)
  *\[*...
  [extend](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_comp_ext.htm)
  ...*\]*;
  ...
  [include;](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_incl.htm)
  ...
}

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement for defining an ABAP Dictionary [append structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_append_structures.htm) append\_struct in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry").

-   The statement EXTEND TYPE adds the append structure append\_struct either to an existing structure struct or to a DDIC database table dbtab.
-   The mandatory properties of the append structure must be specified in front of the statement EXTEND TYPE using the same annotations [structure\_annos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_props.htm) as in the definition of a structure.
-   As in the definition of a structure using [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_structure.htm), the components of the append structure are defined in a semicolon-separated list in curly brackets { }, either as individual components [component](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_comps.htm) or by including include structures [include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_incl.htm).
-   As when including structures, an assignment to a search help and a definition of a foreign key dependency can be overwritten using the addition [extend](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_comp_ext.htm) in a blank-separated list.

Hints

-   As in the [CDS syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_general_syntax_rules.htm), the definition of an ABAP Dictionary append structure can contain comments after // and between /\* ... \*/.
-   A more detailed description of the syntax is available in the ADT documentation [Syntax of ABAP Dictionary Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/fc6cd6f7d02f4546a33feb3f5fc9dd66).

Example

Adds the append structure DEMO\_APPEND\_STRUCTURE to the structure DEMO\_STRUCTURE in the ADT.

@EndUserText.label : 'Demo append structure'
@AbapCatalog.enhancement.category : #EXTENSIBLE\_CHARACTER\_NUMERIC
extend type demo\_structure with demo\_append\_structure {
  comp3 : dats;
  comp4 : tims; }

The source code used to define the structure DEMO\_STRUCTURE is not modified by this extension. In the ADT, however, an icon indicates that the structure is extended using DEMO\_APPEND\_STRUCTURE.