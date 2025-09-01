  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros.htm) →  [Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_help.htm) → 

Input Help

Dynpros use input helps to support interactive input. This can be done in three different ways.

-   [Input helps from ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_value_help_auto.htm)

The associated [search help](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensearch_help_glosry.htm "Glossary Entry") is provided automatically for dynpro fields from ABAP Dictionary. If a field has no search help defined, ABAP Dictionary still offers the content of a check table, the fixed values of the underlying domain, or static calendar help or clock help.

-   [Input helps on the dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_value_help_dynp.htm)

ABAP Dictionary search helps can be associated with individual dynpro fields.

-   [Input helps in dialog modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_value_help_mod.htm)

In dynpro flow logic, dialog modules providing self-programmed input help can be called at POV time.

These three options are ordered by priority. If you use more than one technique at the same time, the POV module calls override any definition on the dynpro, which in turn overrides the binding to ABAP Dictionary.

These three options should, however, be applied in the given order. If possible, a search help from ABAP Dictionary should always be defined for the input help and input help should only be defined in dialog modules if no other option is available. In particular, you should consider using a search help exit to enhance a search help before writing your own dialog modules.

Continue
[Input Helps from ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_value_help_auto.htm)
[Input Helps on Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_value_help_dynp.htm)
[Input Help in Dialog Modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_value_help_mod.htm)