  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

SYSTEM-CALL - Object Manager Calls

This statement is intended solely for
\*\*\* Internal use within SAP Basis Development \*\*\*
Even within SAP Basis, it may be used only in programs within the ABAP+GUI dvelopment groups.
Its use is subject to various restrictions, some of which may not be described in the documentation . This documentation is intended for internal SAP use within the Basis development group ABAP+GUI.
Changes and further developments, which may be incompatible, can occur at any time without prior notice!

Variants:

[1\. SYSTEM-CALL OBJMGR SET TRACELEVEL f1.](#!ABAP_VARIANT_1@1@)
[2\. SYSTEM-CALL OBJMGR SET NODELETE MODE f1.](#!ABAP_VARIANT_2@2@)
[3\. SYSTEM-CALL OBJMGR SET MS-MODE INCREMENTAL f1.](#!ABAP_VARIANT_3@3@)
[4\. SYSTEM-CALL OBJMGR SET INITIAL TRIGGERLEVEL f1.](#!ABAP_VARIANT_4@4@)
[5\. SYSTEM-CALL OBJMGR SET GC STEPTIME f1.](#!ABAP_VARIANT_5@5@)
[6\. SYSTEM-CALL OBJMGR SET OVERALLOCATION FRACTION f1.](#!ABAP_VARIANT_6@6@)
[7\. SYSTEM-CALL OBJMGR PERFORM GARBAGE COLLECTION.](#!ABAP_VARIANT_7@7@)
[8\. SYSTEM-CALL OBJMGR PERFORM MARK.](#!ABAP_VARIANT_8@8@)
[9\. SYSTEM-CALL OBJMGR CLONE f1 TO f2.](#!ABAP_VARIANT_9@9@)
[10\. SYSTEM-CALL OBJMGR EQUAL f1 = f2 INTO f3.](#!ABAP_VARIANT_10@10@)
[11\. SYSTEM-CALL OBJMGR GET STATE OF f1 INTO f2.](#!ABAP_VARIANT_11@11@)
[12\. SYSTEM-CALL OBJMGR SET STATE OF f1 INTO f2.](#!ABAP_VARIANT_12@12@)
[13\. SYSTEM-CALL EVENTS GET NUM\_HANDLERS FOR f1 OF CLASS f2 INTO f3.](#!ABAP_VARIANT_13@13@)
[14\. SYSTEM-CALL EVENTS GET NUM\_HANDLERS FOR f1 OF INST f2 INTO f3.](#!ABAP_VARIANT_14@14@)

Variant 1

SYSTEM-CALL OBJMGR SET TRACELEVEL f1.

Effect

Sets the TRACE LEVEL. Level 1: Performance statistics and GC phases are recorded in the log file (dev\_w\*). The higher levels are for internal testing purposes only.

Variant 2

SYSTEM-CALL OBJMGR SET NODELETE MODE f1.

Effect

Does not delete objects completely in NODELETE MODE but retains the header. When such an object is accessed, a runtime error occurs. This mechanism is used for troubleshooting purposes if you assume that the [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry") has wrongly deleted an object. The no-delete mode can also be switched on using the Debugger.

Variant 3

SYSTEM-CALL OBJMGR SET MS-MODE INCREMENTAL f1.

Effect

Sets the garbage collector to sequential (0) or incremental (1). The default setting is incremental. This call is only designed for kernel tests.

Variant 4

SYSTEM-CALL OBJMGR SET INITIAL TRIGGERLEVEL f1.

Effect

The 'initial trigger level' is the memory limit (in bytes) at which the garbage collector is started for the first time. This call is only designed for kernel tests.

Variant 5

SYSTEM-CALL OBJMGR SET GC STEPTIME f1.

Effect

No longer supported → runtime error.

Variant 6

SYSTEM-CALL OBJMGR SET OVERALLOCATION FRACTION f1.

Effect

No longer supported → runtime error.

Variant 7

SYSTEM-CALL OBJMGR PERFORM GARBAGE COLLECTION.

Effect

Only designed for kernel tests. Performs a garbage collection. You can also start a garbage collection from within the Debugger.

Variant 8

SYSTEM-CALL OBJMGR PERFORM MARK.

Effect

Only designed for kernel tests. Must never occur in other programs.

Variant 9

SYSTEM-CALL OBJMGR CLONE f1 TO f2.

Effect

Only available to ensure compatibility.

Variant 10

SYSTEM-CALL OBJMGR EQUAL f1 = f2 INTO f3.

Effect

Only available to ensure compatibility.

Variant 11

SYSTEM-CALL OBJMGR GET STATE OF f1 INTO f2.

Effect

Copies the state (of all instance attributes) from object f1 to a dynamically created data structure and returns a data reference f2 (TYPE REF TO DATA) to that structure. You can use this call to save the current state of an object. The variant SET STATE then allows you to reassign the state saved to the object (the object state is reset to its saved state). These calls should only be used by [Object Services](javascript:call_link\('abenobject_services_glosry.htm'\) "Glossary Entry").

Variant 12

SYSTEM-CALL OBJMGR SET STATE OF f1 INTO f2.

Effect

Copies an object state f1 saved with GET STATE back to object f2. The type compatibility is checked. This call should only be used by Object Services.

Variant 13

SYSTEM-CALL EVENTS GET NUM\_HANDLERS FOR f1 OF CLASS f2 INTO f3.

Effect

Returns the current number of registered handlers for CLASS-EVENT f1 of the class f2 and stores it in the integer variable f3.

Variant 14

SYSTEM-CALL EVENTS GET NUM\_HANDLERS FOR f1 OF INST f2 INTO f3.

Effect

Returns the current number of registered handlers for the instance event (EVENT) f1 of the instance f2 and stores it in the integer variable f3.