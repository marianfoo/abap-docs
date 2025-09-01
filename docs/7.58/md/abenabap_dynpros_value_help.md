---
title: "Continue"
description: |
  dynpro - Input Helps in the ABAP Dictionary(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_value_help_auto.htm) dynpro - Input Helps on Dynpros(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_value_help_dynp.htm) dynpro - Input Help in Di
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_value_help.htm"
abapFile: "abenabap_dynpros_value_help.htm"
keywords: ["do", "if", "try", "abenabap", "dynpros", "value", "help"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - Processing Screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_processing_screens.htm) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_help.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Input%20Help%2C%20ABENABAP_DYNPROS_VALUE_HELP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - Input Help

Dynpros use input helps to support interactive input. This can be done in three different ways.

-   [Input helps from the ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_value_help_auto.htm)
    
    The associated [search help](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensearch_help_glosry.htm "Glossary Entry") is provided automatically for dynpro fields from the ABAP Dictionary. If a field has no search help defined, the ABAP Dictionary still offers the content of a check table, the fixed values of the corresponding domain, or static calendar help or clock help as input help.
    
-   [Input helps on the dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_value_help_dynp.htm)
    
    ABAP Dictionary search helps can be linked with individual dynpro fields.
    
-   [Input helps in dialog modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_value_help_mod.htm)
    
    In dynpro flow logic, dialog modules providing self-programmed input help can be called at POV time.
    

These three options are ordered by ascending priority. If different techniques are used at the same time, the POV module calls override any definition on the dynpro, which in turn overrides the binding to the ABAP Dictionary.

These three options should, however, be applied in the given order. If possible, a search help from ABAP Dictionary should always be defined for the input help and input help should only be defined in dialog modules if no other option is available. In particular, the enhancement of search helps using search help exits should be considered beforehand.

Continue
[dynpro - Input Helps in the ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_value_help_auto.htm)
[dynpro - Input Helps on Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_value_help_dynp.htm)
[dynpro - Input Help in Dialog Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_value_help_mod.htm)