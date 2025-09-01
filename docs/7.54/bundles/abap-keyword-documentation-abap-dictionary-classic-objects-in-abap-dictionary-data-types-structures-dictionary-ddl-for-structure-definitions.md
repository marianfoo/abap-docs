# ABAP Keyword Documentation / ABAP - Dictionary / Classic Objects in ABAP Dictionary / Data Types / Structures / Dictionary DDL for Structure Definitions

Included pages: 11



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenddic_define_structure.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_define_structure.htm)
- [abenddicddl_define_structure.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_structure.htm)
- [abenddicddl_define_struct_props.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_props.htm)
- [abenddicddl_define_struct_comps.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_comps.htm)
- [abenddicddl_define_struct_cmpprps.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_cmpprps.htm)
- [abenddicddl_define_struct_valuhelp.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_valuhelp.htm)
- [abenddicddl_define_struct_incl.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_incl.htm)
- [abenddicddl_define_struct_comp_ext.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_comp_ext.htm)

**Bundle Contains**: 8 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.907Z

---

### abenddic_define_structure.htm

> **📖 Official SAP Documentation**: [abenddic_define_structure.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_define_structure.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) → 

Dictionary DDL for Structure Definitions

In the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), a structure can be displayed and modified using source-code-based methods in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). Here, the source code of a structure is not saved and transported. Instead, the source code of an existing structure is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the source code and saved to the system tables.

-   [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\))

Note

All properties of a structure described in the preceding sections can be defined using DEFINE STRUCTURE or in transaction SE11.

Continue
[DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\))



**📖 Source**: [abenddic_define_structure.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_define_structure.htm)

### abenddicddl_define_structure.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_structure.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_structure.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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



**📖 Source**: [abenddicddl_define_structure.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_structure.htm)

### abenddicddl_define_struct_props.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_props.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_props.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

DEFINE STRUCTURE - structure\_annos

Syntax

@EndUserText.label : '...'
@AbapCatalog.enhancementCategory : enh\_cat

Effect

Mandatory annotations for specifying structure properties in the definition of a structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   In quotation marks, @EndUserText.label defines the [short text of the structure](javascript:call_link\('abenddic_structures_sema.htm'\)) in its original language.

-   @AbapCatalog.enhancementCategory defines the [enhancement category of the structure](javascript:call_link\('abenddic_structures_enh_cat.htm'\)). The following can be specified for enh\_cat:

-   #NOT\_CLASSIFIED - [Not classified](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

-   #NOT\_EXTENSIBLE - [Cannot be enhanced (extended)](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

-   #EXTENSIBLE\_CHARACTER - [Can be enhanced (extended) and is character-like](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

-   #EXTENSIBLE\_CHARACTER\_NUMERIC - [Can be enhanced (extended) and is character-like or numeric](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

-   #EXTENSIBLE\_ANY - [Can be enhanced (extended) in any way](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

Notes

-   If specified, #NOT\_CLASSIFIED is used only to display existing structures with this property. Any new or modified structures should always have an enhancement category.

-   The same annotations must also be specified in the definition of a database table using [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) and an append structure using [EXTEND TYPE](javascript:call_link\('abenddicddl_extend_type.htm'\)).

-   The syntax used to specify the properties is based on [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). There are, however, no visible associated [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry").



**📖 Source**: [abenddicddl_define_struct_props.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_props.htm)

### abenddicddl_define_struct_comps.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_comps.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_comps.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

DEFINE STRUCTURE - component

Syntax

*\[*component\_annos*\]*
*\[*[foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\))*\]*
*\[*KEY*\]* comp : *{* *{*data\_element *\[* [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))*\]*
                             *\[*[foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\))*\]**}*
               *|*abap. [type](javascript:call_link\('abenddic_builtin_types.htm'\))*\[*(n)*|*(n,m)*\]* *}*
           *|* *{* REFERENCE TO any\_type *}*
           *|* *{* struct *\[*BOXED*\]* *}*
           *|* *{* table\_type *}*
           *\[*NOT NULL*\]*;

Effect

Defines a single [component](javascript:call_link\('abenddic_structures_tech.htm'\)) in the definition of a structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   Optional component properties can be specified using annotations [component\_annos](javascript:call_link\('abenddicddl_define_struct_cmpprps.htm'\)) before the component itself is specified.

-   [foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\)) can be used to specify the properties of a foreign key dependency defined with [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)).

-   comp indicates the name of the component.

-   data\_element or abap.type is used to define an elementary component or a component with a reference type:

-   data\_element can be used to specify an existing [data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry"). If the data element has an elementary data type, an elementary component is defined. If the data element has a reference type, the component is defined with this reference type.

-   abap.type*\[*(n)*|*(n,m)*\]* can be used to specify a built-in data type from ABAP Dictionary and an elementary component of this type is defined. When specified after the mandatory prefix abap, [type](javascript:call_link\('abenddic_builtin_types.htm'\)) indicates the type. n and m must be used to specify the length and number of decimal places, as specified by the type.

-   REFERENCE TO any\_type is used to define a reference type. For any\_type, the syntax abap.type*\[*(n)*|*(n,m)*\]* can be used to specify any existing data types from ABAP Dictionary, classes or interfaces from the class library, the generic types DATA or OBJECT, or built-in types.

-   struct *\[*BOXED*\]* is used to define a substructure. Structures, database tables, or views from ABAP Dictionary can all be specified for struct. BOXED can be used to define the substructure as a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry").

-   table\_type is used to define a tabular component. [Table types](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry") from ABAP Dictionary can be specified for table\_type.

-   The additions KEY and NOT NULL can be used to define the component as a [key field](javascript:call_link\('abenddic_structures_sema.htm'\)) and to set a [flag for initial values](javascript:call_link\('abenddic_structures_sema.htm'\)). Both these additions are only applicable to structures that are included in database tables.

-   The addition [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\)) can be used to assign a search help to a structure component whose data type is defined using a data element with elementary data type.

-   The addition [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)) can be used to define a [foreign key dependency](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") for a structure component whose data type is defined using a data element with elementary data type. This addition is only applicable to structures that are included in database tables.

Note

The [activation type](javascript:call_link\('abenddic_structures_tech.htm'\)) (relevant only for database tables) cannot be modified using DEFINE STRUCTURE.

Example

Defines elementary components of the structure DEMO\_DAY with reference to built-in dictionary types. In the example for [include structures](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)), the structure is included more than once in another structure.

@EndUserText.label : 'Demo for include structure'
@AbapCatalog.enhancementCategory : #NOT\_EXTENSIBLE
define structure demo\_day {
  work : abap.char(8);
  free : abap.char(16); }

Continue
[DEFINE STRUCTURE - component\_annos](javascript:call_link\('abenddicddl_define_struct_cmpprps.htm'\))
[DEFINE STRUCTURE - value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))



**📖 Source**: [abenddicddl_define_struct_comps.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_comps.htm)

### abenddicddl_define_struct_cmpprps.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_cmpprps.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_cmpprps.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) →  [DEFINE STRUCTURE - component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) → 

DEFINE STRUCTURE - component\_annos

Syntax

*\[*@EndUserText.label : '...'*\]*
*\[*@Semantics.amount.currencyCode : 'struct.comp'*\]*
*\[*@Semantics.quantity.unitOfMeasure : 'struct.comp'*\]*

Effect

Applies annotations to specify optional properties of a [component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) in the definition of a structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   In quotation marks, @EndUserText.label defines the [short text of the component](javascript:call_link\('abenddic_structures_sema.htm'\)) in the original language of the structure.

-   @Semantics.amount.currencyCode - Definition of a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) for a [currency field](javascript:call_link\('abenddic_currency_field.htm'\)). A component comp with the built-in dictionary type CUKY from the same or from a different structure struc must be specified in quotation marks.

-   @Semantics.quantity.unitOfMeasure - Definition of a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) for a [quantity field](javascript:call_link\('abenddic_quantity_field.htm'\)). A component comp with the built-in dictionary type UNIT from the same or from a different structure struc must be specified in quotation marks.

Note

The syntax used to specify the properties is based on [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). There are, however, no visible associated [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry").

Example

Defines the component weight\_unit as a reference field for the quantity field weight in the same structure.

...
define structure struct {
  ...
  @Semantics.quantity.unitOfMeasure : 'struct.weight\_unit'
  weight :      abap.quan(2);
  weight\_unit : abap.unit(2);
  ...
  }



**📖 Source**: [abenddicddl_define_struct_cmpprps.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_cmpprps.htm)

### abenddicddl_define_struct_valuhelp.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_valuhelp.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_valuhelp.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) →  [DEFINE STRUCTURE - component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) → 

DEFINE STRUCTURE - value\_help

Syntax

...  WITH VALUE HELP value\_help
       WHERE parameter1 = structure.component1
         *\[*AND parameter2 = structure.component2 ...*\]* ...

Effect

Assigns a [search help](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") to a [structure component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) whose data type is defined by a data element with an elementary data type in the definition of a structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). Here, value\_help is an existing search help in ABAP Dictionary. All parameters of the search help must be associated with structure components after WHERE.

Note

The addition WITH VALUE HELP can be used, with the same meaning, in the definition of a database using [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)).

Example

Defines elementary components with reference to data elements and binds a search help to the second component.

...
define structure struct {
  comp1 : s\_carr\_id;
  comp2 : s\_conn\_id
    with value help demo\_f4\_field
      where carrid = struct.comp1
        and connid = struct.comp2;
  ...
  }



**📖 Source**: [abenddicddl_define_struct_valuhelp.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_valuhelp.htm)

### abenddicddl_define_struct_comps.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_comps.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_comps.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

DEFINE STRUCTURE - component

Syntax

*\[*component\_annos*\]*
*\[*[foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\))*\]*
*\[*KEY*\]* comp : *{* *{*data\_element *\[* [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))*\]*
                             *\[*[foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\))*\]**}*
               *|*abap. [type](javascript:call_link\('abenddic_builtin_types.htm'\))*\[*(n)*|*(n,m)*\]* *}*
           *|* *{* REFERENCE TO any\_type *}*
           *|* *{* struct *\[*BOXED*\]* *}*
           *|* *{* table\_type *}*
           *\[*NOT NULL*\]*;

Effect

Defines a single [component](javascript:call_link\('abenddic_structures_tech.htm'\)) in the definition of a structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   Optional component properties can be specified using annotations [component\_annos](javascript:call_link\('abenddicddl_define_struct_cmpprps.htm'\)) before the component itself is specified.

-   [foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\)) can be used to specify the properties of a foreign key dependency defined with [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)).

-   comp indicates the name of the component.

-   data\_element or abap.type is used to define an elementary component or a component with a reference type:

-   data\_element can be used to specify an existing [data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry"). If the data element has an elementary data type, an elementary component is defined. If the data element has a reference type, the component is defined with this reference type.

-   abap.type*\[*(n)*|*(n,m)*\]* can be used to specify a built-in data type from ABAP Dictionary and an elementary component of this type is defined. When specified after the mandatory prefix abap, [type](javascript:call_link\('abenddic_builtin_types.htm'\)) indicates the type. n and m must be used to specify the length and number of decimal places, as specified by the type.

-   REFERENCE TO any\_type is used to define a reference type. For any\_type, the syntax abap.type*\[*(n)*|*(n,m)*\]* can be used to specify any existing data types from ABAP Dictionary, classes or interfaces from the class library, the generic types DATA or OBJECT, or built-in types.

-   struct *\[*BOXED*\]* is used to define a substructure. Structures, database tables, or views from ABAP Dictionary can all be specified for struct. BOXED can be used to define the substructure as a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry").

-   table\_type is used to define a tabular component. [Table types](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry") from ABAP Dictionary can be specified for table\_type.

-   The additions KEY and NOT NULL can be used to define the component as a [key field](javascript:call_link\('abenddic_structures_sema.htm'\)) and to set a [flag for initial values](javascript:call_link\('abenddic_structures_sema.htm'\)). Both these additions are only applicable to structures that are included in database tables.

-   The addition [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\)) can be used to assign a search help to a structure component whose data type is defined using a data element with elementary data type.

-   The addition [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)) can be used to define a [foreign key dependency](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") for a structure component whose data type is defined using a data element with elementary data type. This addition is only applicable to structures that are included in database tables.

Note

The [activation type](javascript:call_link\('abenddic_structures_tech.htm'\)) (relevant only for database tables) cannot be modified using DEFINE STRUCTURE.

Example

Defines elementary components of the structure DEMO\_DAY with reference to built-in dictionary types. In the example for [include structures](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)), the structure is included more than once in another structure.

@EndUserText.label : 'Demo for include structure'
@AbapCatalog.enhancementCategory : #NOT\_EXTENSIBLE
define structure demo\_day {
  work : abap.char(8);
  free : abap.char(16); }

Continue
[DEFINE STRUCTURE - component\_annos](javascript:call_link\('abenddicddl_define_struct_cmpprps.htm'\))
[DEFINE STRUCTURE - value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))



**📖 Source**: [abenddicddl_define_struct_comps.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_comps.htm)

### abenddicddl_define_struct_incl.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_incl.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_incl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

DEFINE STRUCTURE - include

Syntax

*\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]*
                  *\[*...
                   [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))
                   ...*\]*;

Effect

Includes an [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) in the definition of a structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   Any existing structure from ABAP Dictionary, including database tables or views, can be specified as struct.

-   group can be used to specify an optional name of a [group](javascript:call_link\('abenddic_include_structure.htm'\)).

-   suffix can be used to specify an optional three-character [suffix](javascript:call_link\('abenddic_include_structure.htm'\)).

-   A blank-separated list of additions, [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\)), can be used to overwrite the assignment to a search help and the definition of a foreign key dependency for each included component.

Note

The addition INCLUDE can be used with the same semantics in the statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) in cases where the include structure is suitable for database tables.

Example

Syntax for defining the structure DEMO\_WEEK in the ADT.

...
define structure demo\_week {
  monday    : include demo\_day with suffix \_mo;
  tuesday   : include demo\_day with suffix \_tu;
  wednesday : include demo\_day with suffix \_we;
  thursday  : include demo\_day with suffix \_th;
  friday    : include demo\_day with suffix \_fr;
}

Continue
[DEFINE STRUCTURE - extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))



**📖 Source**: [abenddicddl_define_struct_incl.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_incl.htm)

### abenddicddl_define_struct_comp_ext.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_comp_ext.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_comp_ext.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) →  [DEFINE STRUCTURE - include](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)) → 

DEFINE STRUCTURE - extend

Syntax

... *\[*[foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\))*\]*
    EXTEND component : *\[*[value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))*\]* *\[*foreign\_key*\]* ...

Effect

Defines component properties when [including](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)) include structures using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). The addition EXTEND can be specified for the every component component in the included [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) and defines the following properties for this structure. If any of the properties of the included component already exist, they are overwritten.

-   [foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\)) - Properties of a foreign key relationship

-   [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\)) - Assignment to a search help.

-   foreign\_key - Definition of a foreign key dependency.

At least one of the additions value\_help and foreign\_key must be specified.

Note

The addition EXTEND can be used for individual components and with the same meaning in the definition of a database table with [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) or an append structure with [EXTEND TYPE](javascript:call_link\('abenddicddl_extend_type.htm'\)).

Example

Includes a structure include\_struct in a structure struct, where EXTEND is used to assign a search help to the components comp1 and comp2.

...
define structure struct {
  ...
  include include\_struct
    extend comp1 :
      with value help demo\_f4\_field
        where carrid = struct.comp1
          and connid = struct.comp2
    extend comp2 :
      with value help demo\_f4\_field
        where carrid = struct.comp1
          and connid = struct.comp2;
  ...
  }



**📖 Source**: [abenddicddl_define_struct_comp_ext.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_comp_ext.htm)

### abenddicddl_define_struct_incl.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_incl.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_incl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

DEFINE STRUCTURE - include

Syntax

*\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]*
                  *\[*...
                   [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))
                   ...*\]*;

Effect

Includes an [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) in the definition of a structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   Any existing structure from ABAP Dictionary, including database tables or views, can be specified as struct.

-   group can be used to specify an optional name of a [group](javascript:call_link\('abenddic_include_structure.htm'\)).

-   suffix can be used to specify an optional three-character [suffix](javascript:call_link\('abenddic_include_structure.htm'\)).

-   A blank-separated list of additions, [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\)), can be used to overwrite the assignment to a search help and the definition of a foreign key dependency for each included component.

Note

The addition INCLUDE can be used with the same semantics in the statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) in cases where the include structure is suitable for database tables.

Example

Syntax for defining the structure DEMO\_WEEK in the ADT.

...
define structure demo\_week {
  monday    : include demo\_day with suffix \_mo;
  tuesday   : include demo\_day with suffix \_tu;
  wednesday : include demo\_day with suffix \_we;
  thursday  : include demo\_day with suffix \_th;
  friday    : include demo\_day with suffix \_fr;
}

Continue
[DEFINE STRUCTURE - extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))



**📖 Source**: [abenddicddl_define_struct_incl.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_incl.htm)

### abenddicddl_define_structure.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_structure.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_structure.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenddicddl_define_structure.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_structure.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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
