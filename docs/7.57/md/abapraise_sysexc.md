---
title: "RAISE SYSTEM-EXCEPTIONS"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax RAISE SYSTEM-EXCEPTIONS  RMC_COMMUNICATION_FAILURE  RMC_INVALID_STATUS  RMC_SYSTEM_FAILURE  Effect The given runtime error is raised. Hint Currently, only the following runtime errors are r
version: "7.57"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_sysexc.htm"
abapFile: "abapraise_sysexc.htm"
keywords: ["do", "if", "method", "abapraise", "sysexc"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAISE SYSTEM-EXCEPTIONS, ABAPRAISE_SYSEXC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

RAISE SYSTEM-EXCEPTIONS

This statement is for internal use only.
It must not be used in application programs.

Syntax

RAISE SYSTEM-EXCEPTIONS *{* RMC\_COMMUNICATION\_FAILURE
                        *|* RMC\_INVALID\_STATUS
                        *|* RMC\_SYSTEM\_FAILURE *}*

Effect

The given runtime error is raised.

Hint

Currently, only the following runtime errors are raised:

-   RMC\_COMMUNICATION\_FAILURE
-   RMC\_INVALID\_STATUS
-   RMC\_SYSTEM\_FAILURE

Moreover, this is only allowed within methods and only in system programs.