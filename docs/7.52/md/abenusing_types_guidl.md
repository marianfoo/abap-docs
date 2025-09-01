  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_guidl.htm'\)) → 

Using Types

Background

You can use the data types declared according to the rules on [Bound and Standalone Data Types](javascript:call_link\('abenbound_independent_dtype_guidl.htm'\) "Guideline") and [Declaration of Data Types and Constants](javascript:call_link\('abendeclaration_dtypes_const_guidl.htm'\) "Guideline") for declaring and creating data objects, as well as for typing field symbols or interface parameters. You specify them after the TYPE addition of the corresponding statement.

Rule

Use semantically appropriate data types only

Use existing types only if they match the semantics of the typed object. You must not select an existing type based only on the technical attributes.

Details

As long as it extends beyond an elemental ABAP type, the type of a data object or an interface parameter provides the source code reader with information about the semantics of these variables. This makes it easier to recognize the meaning of individual variables.

For this reason, you must use only data types whose semantics match the usage. The technical attributes of a type alone do not justify its use in a specific context, as this impedes the readability of the program.

In particular, this applies to the reuse or multiple use of existing types. If you require a data type with specific technical attributes for an application, you should not simply use any type with these attributes from ABAP Dictionary. In the past, this has frequently been the chosen procedure. Consequently applying package encapsulation may help prevent the unwanted use of own data types.

Note

This rule applies especially for the use of structures from ABAP Dictionary. For example, you should never use a structure defining a database table as a template for input or output fields of classic dynpros or in Web Dynpro. This would violate the [SoC principle](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline").

Bad Example

In the following source code a variable is declared, whose name and use clearly indicate that it is used for a truth value. The variable is declared with a technically correct, but semantically incorrect, data type. syst-batch, after all, is the data type for the [system field](javascript:call_link\('abensystem_fields_guidl.htm'\) "Guideline") sy-batch, which indicates whether a program is executed in the background.

DATA is\_empty TYPE syst-batch.
...
IF is\_empty IS INITIAL.
  ...
ENDIF.

Good Example

The following source code shows an improved example compared to the source code above. In this case, the abap\_bool type of type group abap, which is intended for [truth values](javascript:call_link\('abendataobjects_true_value_guidl.htm'\) "Guideline"), is used. In addition, the request of the truth value is performed using a specifically designated constant from the same type group.

DATA is\_empty TYPE abap\_bool.
...
IF is\_empty EQ abap\_false.
  ...
ENDIF.