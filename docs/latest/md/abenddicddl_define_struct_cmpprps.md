---
title: "Syntax"
description: |
  @EndUserText.label : '...' @AbapCatalog.decfloat.outputStyle : style  @AbapCatalog.textLanguage  @Semantics.amount.currencyCode : 'struct.comp' @Semantics.quantity.unitOfMeasure : 'struct.comp' Effect Annotation for specifying optional properties of a compone
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm"
abapFile: "abenddicddl_define_struct_cmpprps.htm"
keywords: ["do", "if", "try", "data", "types", "abenddicddl", "define", "struct", "cmpprps"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE, component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20component_annos%2C%20ABENDDICDDL_DEFINE_STRUCT_CMPPRPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

DDIC DDL - DEFINE STRUCTURE, component\_annos

Syntax

*\[*@EndUserText.label : '...'*\]*
*\[*@AbapCatalog.decfloat.outputStyle : style *\]*
*\[*@AbapCatalog.textLanguage *\]*
*\[*@Semantics.amount.currencyCode : 'struct.comp'*\]*
*\[*@Semantics.quantity.unitOfMeasure : 'struct.comp'*\]*

Effect

Annotation for specifying optional properties of a [component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm) in the definition of a DDIC structure using the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry").

-   In quotation marks, @EndUserText.label defines the [short text of the component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm) in the original language of the structure.
-   @AbapCatalog.decfloat.outputStyle defines the [output style](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_decimal_floating_point.htm) of a decimal floating point number. style can be specified as:
    -   #NORMAL - default, mathematical or scientific, depending on space
    -   #SIGN\_RIGHT
    -   #SCALE\_PRESERVING
    -   #SCIENTIFIC
    -   #SCIENTIFIC\_WITH\_LEADING\_ZERO
    -   #SCALE\_PRESERVING\_SCIENTIFIC
    -   #ENGINEERING
-   @AbapCatalog.textLanguage - Flags a component of type LANG as [text language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_dbtab_text_language.htm)
-   @Semantics.amount.currencyCode - Definition of a [reference field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm) for a [currency field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_currency_field.htm). A component comp with the built-in dictionary type CUKY from the same or from a different structure struc must be specified in quotation marks.
-   @Semantics.quantity.unitOfMeasure - Definition of a [reference field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm) for a [quantity field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_quantity_field.htm). A component comp with the built-in dictionary type UNIT from the same or from a different structure struc must be specified in quotation marks.

Hint

The syntax used to specify the properties is based on [CDS annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry"). There are, however, no visible associated [annotation definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").

Example

Definition of the component weight\_unit as a reference field for the quantity field weight in the same structure.

...
define structure struct {
  ...
  @Semantics.quantity.unitOfMeasure : 'struct.weight\_unit'
  weight :      abap.quan(2);
  weight\_unit : abap.unit(2);
  ...
  }