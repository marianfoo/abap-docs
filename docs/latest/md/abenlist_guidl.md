---
title: "Lists"
description: |
  Background A list is a medium used for the structured and formatted output of data. The following lists are available in ABAP: -   Classic lists, which are written to a list buffer using ABAP statements and displayed on a special list dynpro. -   Output of the SAP List Viewer (ALV), which is display
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlist_guidl.htm"
abapFile: "abenlist_guidl.htm"
keywords: ["select", "do", "while", "if", "case", "try", "method", "class", "data", "abenlist", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarchitecture_gdl.htm) →  [User Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_interfaces_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Lists%2C%20ABENLIST_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Lists

Background   

A list is a medium used for the structured and formatted output of data. The following lists are available in ABAP:

-   Classic lists, which are written to a list buffer using ABAP statements and displayed on a special list dynpro.
-   Output of the SAP List Viewer (ALV), which is displayed in [GUI controls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengui_control_glosry.htm "Glossary Entry") during the processing of classic dynpros. ALV lists are accessed using classes, such as CL\_SALV\_TABLE (non-hierarchically tabular lists), CL\_SALV\_HIERSEQ\_TABLE (hierarchically sequential lists), or CL\_SALV\_TREE (hierarchically tabular lists).

Classic lists are the only option to send ABAP data from ABAP programs directly to the SAP spool system as spool lists. If SAP List Viewer is used, the lists that are displayed in the viewer are automatically converted to classic spool lists during printing.

Rule   

Use SAP List Viewer

Do not use classic lists. If dynpro-based, classic UI technologies are still used, SAP List Viewer (ALV) or other GUI control-based technologies should be used instead of classic lists in production programs.

Details   

Using classic lists is no longer recommended for the following reasons:

-   The processing of lists is based on global data and events of the ABAP runtime framework.
-   The list buffer that is used for classic lists is bound to an executable program or a dynpro sequence and not to classes and objects.
-   It is almost impossible to separate presentation logic and application logic when writing to lists.
-   The UI of a classic list is not standardized and thus usually not accessible.

The concept of classic lists is therefore mostly incompatible with the ABAP Objects concept, and classic lists cannot be encapsulated in function pools as easily as classic dynpros and selection screens.

While the application developer must ensure [accessibility](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaccessibility_guidl.htm "Guideline") in classic lists with a great deal of effort, the ALV lists automatically comply with the accessibility requirements because the ALV already provides the required services, such as user-specific settings.

Exception

Small helper programs that are not intended for live use in application systems can continue to use classic lists for system-related console output. The WRITE list statement here assumes the same role as System.out.println(...) in Java or printf in C.

In cases in which an ALV output seems to be overdimensioned, other methods are possible, such as Textedit Control or Browser Control (or its wrapping in dynamic documents) for the formatted output of non-tabular content. As before, accessibility must be guaranteed here.

Hint

For simple console output, XML-based output streams can be used. An example of this is shown by the class [CL\_DEMO\_OUTPUT\_STREAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_demo_output.htm). The class CL\_DEMO\_OUTPUT demonstrates possible applications of this class. It is used in programs in the [ABAP Example Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_examples.htm).

Bad Example

Executing the program DEMO\_CLASSICAL\_REPORTING produces a classic list output. However, according to the above rule, using classic lists in application programs is no longer recommended.

Good Example

Executing the program DEMO\_ALV\_REPORTING produces ALV lists with the same content and the same functions as the classic lists in the previous example. ALV lists replace classic lists in those cases in which classic dynpros are still used.