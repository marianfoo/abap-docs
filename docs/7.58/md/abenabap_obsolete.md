---
title: "Obsolete Language Elements"
description: |
  The language elements described in this subnode are obsolete and are only available for reasons of compatibility with older releases. These statements may still be encountered in older programs but should no longer be used in new programs. Most of the obsolete language elements listed here are forbi
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm"
abapFile: "abenabap_obsolete.htm"
keywords: ["do", "if", "try", "class", "data", "abenabap", "obsolete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Language%20Elements%2C%20ABENABAP_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Language Elements

The language elements described in this subnode are obsolete and are only available for reasons of compatibility with older releases. These statements may still be encountered in older programs but should no longer be used in new programs.

Most of the obsolete language elements listed here are forbidden in the syntax of [classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_glosry.htm "Glossary Entry"). This means they can now only be used outside of classes. There are replacement constructs for all obsolete language elements, which improve the efficiency and readability of programs.

-   [Obsolete Program Properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_properties_obsolete.htm)
-   [Obsolete Syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensyntax_obsolete.htm)
-   [Obsolete Built-In Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_obsolete.htm)
-   [Obsolete Modularization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_modularization.htm)
-   [Obsolete Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_declarations.htm)
-   [Obsolete Object Creation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassign_obsolete.htm)
-   [Obsolete Calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_call_obsolete.htm)
-   [Obsolete Exit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_leave.htm)
-   [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_program_flow.htm)
-   [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_internal_obsolete.htm)
-   [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_storage_obsolete.htm)
-   [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_obsolete.htm)
-   [Obsolete Text Environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environment_obsolete.htm)
-   [Obsolete Program Editing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_editing_obsolete.htm)
-   [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextern_obsolete.htm)

Continue
[Obsolete Program Properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_properties_obsolete.htm)
[Obsolete Syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensyntax_obsolete.htm)
[Obsolete Built-In Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_obsolete.htm)
[Obsolete Modularization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_modularization.htm)
[Obsolete Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_declarations.htm)
[Obsolete Type Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_typing.htm)
[Obsolete Object Creation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassign_obsolete.htm)
[Obsolete Calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_call_obsolete.htm)
[Obsolete Leave](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_leave.htm)
[Obsolete Program Flow](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_program_flow.htm)
[Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_internal_obsolete.htm)
[Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_storage_obsolete.htm)
[Obsolete Statements for RAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_obsolete.htm)
[Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_obsolete.htm)
[Obsolete Text Environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environment_obsolete.htm)
[Obsolete Program Editing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_editing_obsolete.htm)
[Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextern_obsolete.htm)
[Unsupported Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunsupported_obsolete.htm)