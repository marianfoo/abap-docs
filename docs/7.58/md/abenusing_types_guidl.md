---
title: "Using Types"
description: |
  Background You can use the data types declared according to the rules on Bound and Standalone Data Types(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbound_independent_dtype_guidl.htm 'Guideline') and Declaration of Data Types and Constants(https://help.sap.com/doc/abapdocu_758
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenusing_types_guidl.htm"
abapFile: "abenusing_types_guidl.htm"
keywords: ["select", "do", "if", "case", "class", "data", "types", "field-symbol", "abenusing", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrobust_abap_gdl.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_type_obj_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20Types%2C%20ABENUSING_TYPES_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Using Types

Background   

You can use the data types declared according to the rules on [Bound and Standalone Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbound_independent_dtype_guidl.htm "Guideline") and [Declaration of Data Types and Constants](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclaration_dtypes_const_guidl.htm "Guideline") for declaring and creating data objects, as well as for typing field symbols or interface parameters. You specify them after the TYPE addition of the corresponding statement.

Rule   

Use semantically appropriate data types only

Use existing types only if they match the semantics of the typed object. You must not select an existing type based only on the technical properties.

Details   

As long as it extends beyond an elemental ABAP type, the type of a data object or an interface parameter provides the source code reader with information about the semantics of these variables. This makes it easier to recognize the meaning of individual variables.

For this reason, you must use only data types whose semantics match the usage. The technical properties of a type alone do not justify its use in a specific context, as this impedes the readability of the program.

In particular, this applies to the reuse or multiple use of existing types. If you require a data type with specific technical properties for an application, you should not simply use any type with these properties from ABAP Dictionary. In the past, this has frequently been the chosen procedure. Consequently applying package encapsulation may help prevent the unwanted use of own data types.

Hint

This rule applies especially for the use of structures from ABAP Dictionary. For example, you should never use a structure defining a database table as a template for input or output fields of classic dynpros or in Web Dynpro. This would violate the [SoC principle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenseparation_concerns_guidl.htm "Guideline").

Bad Example

In the following source code a variable is declared, whose name and use clearly indicate that it is used for a truth value. The variable is declared with a technically correct, but semantically incorrect, data type. syst-batch, after all, is the data type for the [system field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_fields_gdl.htm) sy-batch, which indicates whether a program is executed in the background.

DATA is\_empty TYPE syst-batch.
...
IF is\_empty IS INITIAL.
  ...
ENDIF.

Good Example

The following source code shows an improved example compared to the source code above. In this case, the abap\_bool type of type pool abap, which is intended for [truth values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendataobjects_true_value_guidl.htm "Guideline"), is used. In addition, the request of the truth value is performed using a specifically designated constant from the same type pool.

DATA is\_empty TYPE abap\_bool.
...
IF is\_empty EQ abap\_false.
  ...
ENDIF.