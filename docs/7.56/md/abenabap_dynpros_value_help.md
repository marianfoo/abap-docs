  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_help.htm) → 

dynpro - Input Help

Dynpros use input helps to support interactive input. This can be done in three different ways.

-   [Input helps from the ABAP Dictionary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_value_help_auto.htm)
    
    The associated [search help](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensearch_help_glosry.htm "Glossary Entry") is provided automatically for dynpro fields from the ABAP Dictionary. If a field has no search help defined, the ABAP Dictionary still offers the content of a check table, the fixed values of the corresponding domain, or static calendar help or clock help as input help.
    
-   [Input helps on the dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_value_help_dynp.htm)
    
    ABAP Dictionary search helps can be linked with individual dynpro fields.
    
-   [Input helps in dialog modules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_value_help_mod.htm)
    
    In dynpro flow logic, dialog modules providing self-programmed input help can be called at POV time.
    

These three options are ordered by ascending priority. If different techniques are used at the same time, the POV module calls override any definition on the dynpro, which in turn overrides the binding to the ABAP Dictionary.

These three options should, however, be applied in the given order. If possible, a search help from ABAP Dictionary should always be defined for the input help and input help should only be defined in dialog modules if no other option is available. In particular, the enhancement of search helps using search help exits should be considered beforehand.

Continue
[dynpro - Input Helps in the ABAP Dictionary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_value_help_auto.htm)
[dynpro - Input Helps on Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_value_help_dynp.htm)
[dynpro - Input Help in Dialog Modules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_value_help_mod.htm)