---
title: "Modularization units"
description: |
  Die wesentlichen Modularisierungseinheiten bzw. aufrufbaren Einheiten innerhalb eines ABAP-Programms werden als Verarbeitungsblöcke bezeichnet. Hierbei wird nach Prozeduren auf der einen und Dialogmodulen sowie Ereignisblöcken auf der anderen Seite unterschieden. Während Dialogmodule und Ereignisblö
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodularization_unit_guidl.htm"
abapFile: "abenmodularization_unit_guidl.htm"
keywords: ["do", "method", "data", "abenmodularization", "unit", "guidl"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) → 

Modularization units

Die wesentlichen Modularisierungseinheiten bzw. aufrufbaren Einheiten innerhalb eines ABAP-Programms werden als Verarbeitungsblöcke bezeichnet. Hierbei wird nach Prozeduren auf der einen und Dialogmodulen sowie Ereignisblöcken auf der anderen Seite unterschieden. Während Dialogmodule und Ereignisblöcke aus der Dynpro-Ablauflogik oder im Rahmen der Ereignissteuerung durch die ABAP-Laufzeitumgebung aufgerufen werden, sind die Prozeduren für den direkten Aufruf aus einem ABAP-Programm heraus vorgesehen. Neben Verarbeitungsblöcken können auch noch Makros als aufrufbare Einheiten angelegt werden.

Procedures can be:

-   Methods

-   Function modules

-   Subroutines

Only procedures support parameter interfaces and have a local data context.

Dialog modules and event blocks do not have parameter interfaces and generally do not have a local data context.

Macros are a kind of halfway house between callable units and source code modularization.

-   [Function Modules and Subroutines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")

-   [Type of Formal Parameters in Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_formal_param_proc_guidl.htm "Guideline")

-   [How Formal Parameters Are Passed](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_transf_formal_para_guidl.htm "Guideline")

-   [Pass By Reference for Output Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenref_transf_output_param_guidl.htm "Guideline")

-   [Typing of Formal Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_formal_param_guidl.htm "Guideline")

-   [Internal and External Procedure Calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenintern_extern_proc_call_guidl.htm "Guideline")

-   [Exiting Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexit_procedure_guidl.htm "Guideline")

-   [Dialog Modules and Event Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendial_mod_event_block_guidl.htm "Guideline")

-   [Macros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmacros_guidl.htm "Guideline")

Continue
[Function Modules and Subroutines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm)
[Type of Formal Parameters in Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_formal_param_proc_guidl.htm)
[How Formal Parameters Are Passed](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_transf_formal_para_guidl.htm)
[Pass By Reference for Output Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenref_transf_output_param_guidl.htm)
[Typing of Formal Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_formal_param_guidl.htm)
[Internal and External Procedure Calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenintern_extern_proc_call_guidl.htm)
[Exiting Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexit_procedure_guidl.htm)
[Dialog Modules and Event Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendial_mod_event_block_guidl.htm)
[Macros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmacros_guidl.htm)