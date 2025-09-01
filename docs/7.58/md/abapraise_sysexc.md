---
title: "RAISE SYSTEM-EXCEPTIONS"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax RAISE SYSTEM-EXCEPTIONS  RMC_COMMUNICATION_FAILURE  RMC_INVALID_STATUS  RMC_SYSTEM_FAILURE  Effect The given runtime error is raised. Hint Currently, only the following runtime errors are r
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_sysexc.htm"
abapFile: "abapraise_sysexc.htm"
keywords: ["do", "if", "method", "abapraise", "sysexc"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAISE%20SYSTEM-EXCEPTIONS%2C%20ABAPRAISE_SYSEXC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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