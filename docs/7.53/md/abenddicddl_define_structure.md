  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) → 

DEFINE STRUCTURE

Syntax

[structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\))
DEFINE STRUCTURE struct {
  ...
  [component;](javascript:call_link\('abenddicddl_define_struct_comps.htm'\))
  ...
  [include;](javascript:call_link\('abenddicddl_define_struct_incl.htm'\))
  ...
}

Effect

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement for defining an ABAP Dictionary [structure](javascript:call_link\('abenddic_structures.htm'\)) struct in the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   A structure is defined using the statement DEFINE STRUCTURE. The usual restrictions for ABAP Dictionary [data types](javascript:call_link\('abenddic_data_types.htm'\)) apply to the name struct.

-   The mandatory structure properties must be specified as annotations [structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\)) in front of the statement DEFINE STRUCTURE.

-   The structure components are defined in a semicolon-separated list in curly brackets { } by one of the following methods:

-   Defining individual components [component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\))

-   Including include structures [include](javascript:call_link\('abenddicddl_define_struct_incl.htm'\))

Notes

-   As in the [CDS syntax](javascript:call_link\('abencds_general_syntax_rules.htm'\)), an ABAP Dictionary structure definition can contain comments after // and between /\* ... \*/.

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
[DEFINE STRUCTURE - structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\))
[DEFINE STRUCTURE - component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\))
[DEFINE STRUCTURE - include](javascript:call_link\('abenddicddl_define_struct_incl.htm'\))