  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_types.htm) →  [Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures.htm) →  [Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_define_structure.htm) →  [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_structure.htm) →  [DEFINE STRUCTURE - component](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_struct_comps.htm) → 

DEFINE STRUCTURE - component\_annos

Syntax

*\[*@EndUserText.label : '...'*\]*
*\[*@Semantics.amount.currencyCode : 'struct.comp'*\]*
*\[*@Semantics.quantity.unitOfMeasure : 'struct.comp'*\]*

Effect

Applies annotations to specify optional properties of a [component](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_struct_comps.htm) in the definition of a structure using the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendictionary_ddl_glosry.htm "Glossary Entry").

-   In quotation marks, @EndUserText.label defines the [short text of the component](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_sema.htm) in the original language of the structure.

-   @Semantics.amount.currencyCode - Definition of a [reference field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_sema.htm) for a [currency field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_currency_field.htm). A component comp with the built-in dictionary type CUKY from the same or from a different structure struc must be specified in quotation marks.

-   @Semantics.quantity.unitOfMeasure - Definition of a [reference field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_sema.htm) for a [quantity field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_quantity_field.htm). A component comp with the built-in dictionary type UNIT from the same or from a different structure struc must be specified in quotation marks.

Note

The syntax used to specify the properties is based on [CDS annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotation_glosry.htm "Glossary Entry"). There are, however, no visible associated [annotation definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").

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