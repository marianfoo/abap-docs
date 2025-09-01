---
title: "SET EXTENDED CHECK"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_extended_check_shortref.htm) Obsolete Syntax SET EXTENDED CHECK ONOFF. Effect This statement uses the addition OFF to deactivate the extended program check(https://help.sap.com/doc/abapdocu_757_index_htm/
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_extended_check.htm"
abapFile: "abapset_extended_check.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abapset", "extended", "check"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Program Editing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_editing_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET EXTENDED CHECK, ABAPSET_EXTENDED_CHECK, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

SET EXTENDED CHECK

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_extended_check_shortref.htm)

Obsolete Syntax

SET EXTENDED CHECK *{*ON*|*OFF*}*.

Effect

This statement uses the addition OFF to deactivate the [extended program check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_program_check_glosry.htm "Glossary Entry") for the following statements and uses the addition ON to reactivate it. A deactivated extended program check should be reactivated in the same program. The extended program check reports a SET EXTENDED CHECK OFF statement without the following SET EXTENDED CHECK ON statement and superfluous SET EXTENDED CHECK ON statements. The extended program check is the default setting.

Hints

-   This statement is obsolete and should no longer be used. Instead, the messages from the extended program check for individual statements should be hidden using specific [pragmas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpragma_glosry.htm "Glossary Entry").
-   The statement SET EXTENDED CHECK should not be used in programs that use pragmas to deactivate warnings. This causes an extended program check warning that cannot be deactivated. The same applies to the [pseudo comment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpseudo_comment_slin.htm) #EC \*.
-   In this case, the deactivation of the extended program check can be overridden by selecting Also Display Hidden Messages when the check is called.

Example

The SET EXTENDED CHECK statements suppress all messages from the extended program check in the included program section.

SET EXTENDED CHECK OFF.
DATA: a TYPE string,
      b TYPE string.
a = b.
SET EXTENDED CHECK ON.

The following program section shows the recommended procedure to hide the actual messages using the associated pragma.

DATA: a TYPE string ##needed,
      b TYPE string.
a = b.