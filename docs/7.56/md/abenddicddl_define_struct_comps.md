  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

DDIC DDL - DEFINE STRUCTURE, component

Syntax

*\[*component\_annos*\]*
*\[*[foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\))*\]*
*\[*[geo\_annos](javascript:call_link\('abenddicddl_define_table_srprps.htm'\))*\]*
*\[*KEY*\]* comp : *{* *{*data\_element *\[* [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))*\]*
                             *\[*[foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\))*\]**}*
               *|*abap. [type](javascript:call_link\('abenddic_builtin_types.htm'\))*\[*(n)*|*(n,m)*\]* *}*
           *|* *{* REFERENCE TO any\_type *}*
           *|* *{* struct *\[*BOXED*\]* *}*
           *|* *{* table\_type *}*
           *\[*NOT NULL*\]*;

Effect

Defines a single [component](javascript:call_link\('abenddic_structures_tech.htm'\)) in the definition of a DDIC structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   Optional component properties can be specified using annotations [component\_annos](javascript:call_link\('abenddicddl_define_struct_cmpprps.htm'\)) in front of the component specification itself.
-   [foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\)) can be used to specify the properties of a foreign key dependency defined with [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)).
-   [geo\_annos](javascript:call_link\('abenddicddl_define_table_srprps.htm'\)) is used to specify special properties of a component with the [geodata type](javascript:call_link\('abengeo_data_type_glosry.htm'\) "Glossary Entry") GEOM\_EWKB.
-   comp indicates the name of the component.
-   data\_element or abap.type is used to define an elementary component or a component with a reference type:
    -   data\_element can be used to specify an existing [DDIC data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry"). If the data element has an elementary data type, an elementary component is defined. If the data element has a reference type, the component is defined with this reference type.
    -   abap.type*\[*(n)*|*(n,m)*\]* can be used to specify a built-in data type from the ABAP Dictionary and an elementary component of this type is defined. When specified after the mandatory prefix abap, [type](javascript:call_link\('abenddic_builtin_types.htm'\)) indicates the type. n and m must be used to specify the length and number of decimal places, as specified by the type.
-   REFERENCE TO any\_type is used to define a reference type. For any\_type, the syntax abap.type*\[*(n)*|*(n,m)*\]* can be used to specify any existing data types from the ABAP Dictionary, classes or interfaces from the class library, the generic types DATA or OBJECT, or built-in types.
-   struct *\[*BOXED*\]* is used to define a substructure. Structures, DDIC database tables, or DDIC views from ABAP Dictionary can all be specified for struct. BOXED can be used to define the substructure as a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry").
-   table\_type is used to define a tabular component. [Table types](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry") from the ABAP Dictionary can be specified for table\_type.
-   The additions KEY and NOT NULL can be used to define the component as a [key field](javascript:call_link\('abenddic_structures_sema.htm'\)) and to set a [flag for initial values](javascript:call_link\('abenddic_structures_sema.htm'\)). The addition KEY has no effect when the structure is included in DDIC database tables. It must be used for structure components that are used as lock parameters of lock objects. The addition NOT NULL can be respected for structures that are included in DDIC database tables.
-   The addition [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\)) can be used to assign a search help to a structure component whose data type is defined using a data element with elementary data type.
-   The addition [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)) can be used to define a [foreign key dependency](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") for a structure component whose data type is defined using a data element with elementary data type. This addition only makes sense for structures that are included in DDIC database tables.

Hint

The [activation type](javascript:call_link\('abenddic_structures_tech.htm'\)) (relevant only for DDIC database tables) cannot be modified using DEFINE STRUCTURE.

Example

Defines elementary components of the structure DEMO\_DAY with reference to built-in dictionary types. In the example for [include structures](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)), the structure is included more than once in another structure.

@EndUserText.label : 'Demo for include structure'
@AbapCatalog.enhancementCategory : #NOT\_EXTENSIBLE
define structure demo\_day {
  work : abap.char(8);
  free : abap.char(16); }

Continue
[DDIC DDL - DEFINE STRUCTURE, component\_annos](javascript:call_link\('abenddicddl_define_struct_cmpprps.htm'\))
[DDIC DDL - DEFINE STRUCTURE, value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))