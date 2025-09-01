  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

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