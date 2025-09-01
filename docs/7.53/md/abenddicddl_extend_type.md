  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Enhancements](javascript:call_link\('abenddic_enhancements.htm'\)) →  [Append Structures](javascript:call_link\('abenddic_append_structures.htm'\)) →  [Dictionary DDL for Structure Enhancements](javascript:call_link\('abenddic_extend_type.htm'\)) → 

EXTEND TYPE

Syntax

[structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\))
EXTEND TYPE struct*|*dbtab WITH append\_struct {
  ...
  [component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\))
  *\[*...
  [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))
  ...*\]*;
  ...
  [include;](javascript:call_link\('abenddicddl_define_struct_incl.htm'\))
  ...
}

Effect

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement for defining an ABAP Dictionary [append structure](javascript:call_link\('abenddic_append_structures.htm'\)) append\_struct in the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   The statement EXTEND TYPE adds the append structure append\_struct defined here either to an existing structure struct or to a database table dbtab.

-   The mandatory properties of the append structure must be specified in front of the statement EXTEND TYPE using the same annotations [structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\)) as in the definition of a structure.

-   As in the definition of a structure using [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)), the components of the append structure are defined in a semicolon-separated list in curly brackets { }, either as individual components [component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) or by including include structures [include](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)).

-   As when including structures, an assignment to a search help and a definition of a foreign key dependency can be overwritten using additions [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\)) in a blank-separated list.

Notes

-   As in the [CDS syntax](javascript:call_link\('abencds_general_syntax_rules.htm'\)), the definition of an ABAP Dictionary append structure can contain comments after // and between /\* ... \*/.

-   A more detailed description of the syntax is available in the ADT documentation Syntax of ABAP Dictionary Objects.

Example

Adds the append structure DEMO\_APPEND\_STRUCTURE to the structure DEMO\_STRUCTURE in the ADT.

@EndUserText.label : 'Demo append structure'
@AbapCatalog.enhancementCategory : #EXTENSIBLE\_CHARACTER\_NUMERIC
extend type demo\_structure with demo\_append\_structure {
  comp3 : dats;
  comp4 : tims; }

The source code used to define the structure DEMO\_STRUCTURE is not modified by this enhancement. In the ADT, however, an icon indicates that the structure is enhanced using DEMO\_APPEND\_STRUCTURE.