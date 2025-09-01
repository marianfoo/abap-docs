---
title: "SYSTEM-CALL - Debugger and System Paths"
description: |
  This statement is intended solely for  Internal use within SAP Basis Development  Even within SAP Basis, it may be used only in programs within the ABAP+GUI dvelopment groups. Its use is subject to various restrictions, some of which may not be described in the documentation . This docum
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsystem-call_path.htm"
abapFile: "abapsystem-call_path.htm"
keywords: ["do", "if", "case", "abapsystem", "call", "path"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SYSTEM-CALL%20-%20Debugger%20and%20System%20Paths%2C%20ABAPSYSTEM-CALL_PATH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

SYSTEM-CALL - Debugger and System Paths

This statement is intended solely for
\*\*\* Internal use within SAP Basis Development \*\*\*
Even within SAP Basis, it may be used only in programs within the ABAP+GUI dvelopment groups.
Its use is subject to various restrictions, some of which may not be described in the documentation . This documentation is intended for internal SAP use within the Basis development group ABAP+GUI.
Changes and further developments, which may be incompatible, can occur at any time without prior notice!

Variants:

[1\. SYSTEM-CALL DEBUGGER SET SYSTEM PATH ON.](#!ABAP_VARIANT_1@1@)
[2\. SYSTEM-CALL DEBUGGER SET SYSTEM PATH OFF.](#!ABAP_VARIANT_2@2@)
[3\. SYSTEM-CALL DEBUGGER GET SYSTEM PATH FIELD syspath.](#!ABAP_VARIANT_3@3@)
[4\. SYSTEM-CALL DEBUGGER SET SYSTEM PATH SUSPEND.](#!ABAP_VARIANT_4@4@)
[5\. SYSTEM-CALL DEBUGGER SET SYSTEM PATH RESUME.](#!ABAP_VARIANT_5@5@)
[6\. SYSTEM-CALL DEBUGGER SET PROTECTED PATH ON.](#!ABAP_VARIANT_6@6@)
[7\. SYSTEM-CALL DEBUGGER SET PROTECTED PATH OFF.](#!ABAP_VARIANT_7@7@)

Effect

System paths are code segments that are set in system programs at runtime. Within these segments, the ABAP Debugger behaves as if all procedures directly or indirectly called from there are implemented in system programs. If the system debugging is not activated, the ABAP debugger does not stop within system paths even if a procedure is executed from within a non-system program. The debugger only stops if a break point is set for a line despite the system path.

Protected paths are code segments that cannot be accessed by the ABAP debugger. Variable values cannot be accessed either.

Variant 1   

SYSTEM-CALL DEBUGGER SET SYSTEM PATH ON.

Effect

Switches on the system path. The statement can only be used in system programs. The use in other programs results in a syntax error. System paths cannot be switched on multiple times on the ABAP stack unless in case of a suspension with SYSTEM-CALL DEBUGGER SET SYSTEM PATH SUSPEND..

This variant sets sy-subrc as follows:

-   0: System path is switched on.
-   2: System path has already been switched on.
-   4: The current procedure is not a system procedure.

Variant 2   

SYSTEM-CALL DEBUGGER SET SYSTEM PATH OFF.

Effect

Switches off the system path. The system paths must be switched off in the same procedure, i. e. at runtime of the same ABAP stack level, in which the system path is switched on. If the system path is not explicitly switched off with this statement, it is switched off automatically when leaving the procedure in which it has been switched on.

This variant sets sy-subrc as follows:

-   0: System path is switched off.
-   6: No system path is active.
-   8: System path is not switched off since it has been switched on on another ABAP stack level.

Variant 3   

SYSTEM-CALL DEBUGGER GET SYSTEM PATH FIELD syspath.

Effect

Checks whether a system path is set. The variable syspath is of type i and can have the following values:

-   0: System path is not set.
-   n > 0: System path is switched on and has been set on ABAP stack level n.
-   \-1: System path is set in an internal session that has directly or indirectly (via further internal sessions) called the current internal session.

Variant 4   

SYSTEM-CALL DEBUGGER SET SYSTEM PATH SUSPEND.

Effect

Suspends the system path. Can be used in system programs and other programs. If the variant is used in a system program, the system path is terminated in the next non-system program. If the variant is used in a non-system program, the system path is terminated immediately after the statement SYSTEM-CALL DEBUGGER SET SYSTEM PATH SUSPEND. System paths cannot be suspended multiple times in the ABAP stack. A system path can be switched on again with the statement SYSTEM-CALL DEBUGGER SET SYSTEM PATH ON.. The subordinate system path is retained, since it is the only chance to stack system paths. The new system path on the stack follows all of the rules above. If the new system path is explicitly or implicitly terminated, the subordinate system path is active again.

This variant sets sy-subrc as follows:

-   0: System path is suspended.
-   2: System path is not switched on and, hence, cannot be suspended.
-   4: System path is already suspended.

Variant 5   

SYSTEM-CALLDEBUGGER SET SYSTEM PATH RESUME.

Effect

Terminates the suspended system path. Can be used in system programs and other programs. The termination of the suspended system path must happen in the same procedure, i. e. at runtime in the same ABAP stack level, in which the system path has been suspended. If the termination is not explicitly triggered with this statement, the system path is automatically terminated when leaving the procedure in which the system path has been terminated.

This variant sets sy-subrc as follows:

-   0: System path is resumed after suspension.
-   6: System path is not switched on.
-   8: System path is switched on and cannot be suspended.

Variant 6   

SYSTEM-CALL DEBUGGER SET PROTECTED PATH ON.

Effect

Switches on a protected path. Protected paths cannot be switched on multiple times on the ABAP stack.

This variant sets sy-subrc as follows:

-   0: Protected path is switched on.
-   4: Protected path is already switched on.

Variant 7   

SYSTEM-CALL DEBUGGER SET PROTECTED PATH OFF.

Effect

Protected paths can be only switched off in those procedures in which they have been switched on. If the protected path is not explicitly switched off with this statement, it is switched off automatically when leaving the procedure in which it has been switched on.

This variant sets sy-subrc as follows:

-   0: Protected path is switched off.
-   4: No protected path is active.
-   8: Protected path is not switched off since it has been switched on on another ABAP stack level.