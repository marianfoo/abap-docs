  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE, component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE STRUCTURE, component_annos, ABENDDICDDL_DEFINE_STRUCT_CMPPRPS, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE STRUCTURE, component\_annos

Syntax

*\[*@EndUserText.label : '...'*\]*
*\[*@AbapCatalog.decfloat.outputStyle : style *\]*
*\[*@Semantics.amount.currencyCode : 'struct.comp'*\]*
*\[*@Semantics.quantity.unitOfMeasure : 'struct.comp'*\]*

Effect

Annotation for specifying optional properties of a [component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) in the definition of a DDIC structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   In quotation marks, @EndUserText.label defines the [short text of the component](javascript:call_link\('abenddic_structures_sema.htm'\)) in the original language of the structure.
-   @AbapCatalog.decfloat.outputStyle defines the [output style](javascript:call_link\('abenddic_decimal_floating_point.htm'\)) of a decimal floating point number. style can be specified as:
    -   #NORMAL - default, mathematical or scientific, depending on space
    -   #SIGN\_RIGHT
    -   #SCALE\_PRESERVING
    -   #SCIENTIFIC
    -   #SCIENTIFIC\_WITH\_LEADING\_ZERO
    -   #SCALE\_PRESERVING\_SCIENTIFIC
    -   #ENGINEERING
-   @Semantics.amount.currencyCode - Definition of a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) for a [currency field](javascript:call_link\('abenddic_currency_field.htm'\)). A component comp with the built-in dictionary type CUKY from the same or from a different structure struc must be specified in quotation marks.
-   @Semantics.quantity.unitOfMeasure - Definition of a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) for a [quantity field](javascript:call_link\('abenddic_quantity_field.htm'\)). A component comp with the built-in dictionary type UNIT from the same or from a different structure struc must be specified in quotation marks.

Hint

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