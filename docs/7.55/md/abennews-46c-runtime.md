  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-4.htm) →  [Changes in Release 4.6C](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-46c.htm) → 

Optimization in the Runtime Environment in Release 4.6C

In Release 4.6C, the entire ABAP runtime environment was overhauled, in terms of how programs were generated and executed. The following steps were taken to reduce the load size considerably and improve performance further.

[1\. Handling the Database Buffer](#!ABAP_MODIFICATION_1@1@)
[2\. Handling Type Pools](#!ABAP_MODIFICATION_2@2@)
[3\. Handling Structures](#!ABAP_MODIFICATION_3@3@)
[4\. Other Developments](#!ABAP_MODIFICATION_4@4@)

Modification 1

Handling the Database Buffer

The statement [PERFORM n ON ON ROLLBACK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapperform.htm), which is the equivalent to the statement [PERFORM n ON COMMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapperform.htm), can now be used in the program. This means that all flagged form routines are executed when [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaprollback.htm) is used.

Until now, if a termination message was raised by a [CATCH SYSTEM-EXCEPTIONS ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcatch_sys.htm) statement, only one rollback was carried out in the task handler area. Now the system calls a subroutine, which deletes all [ON COMMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapperform.htm) information and performs the scheduled subroutines.

The system field SY-ONCOM is now set for local [updates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenupdate_glosry.htm "Glossary Entry") (as it is for asynchronous updates). This raises a runtime error when a [COMMIT WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommit.htm) is triggered for a local update.

Modification 2

Handling Type Pools

From now on, types in type pools that are not used are no longer generated in the programs that use the [TYPE POOL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptype-pool.htm). Dynamic accesses are now performed by loading the load table for the type pools at runtime.

In addition, constants in type pools that are not used are no longer generated in the programs that include them. Duplicate control blocks for components are no longer created in key lists for ABAP Dictionary tables. Again, dynamic accesses are now performed using type pool load.

Modification 3

Handling Structures

Additional type information for structure components is no longer generated when the system performs simple operations like [\=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove.htm) or [IF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapif.htm).

Now, when a structure is passed to a [form routine](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform.htm), the type comparison is also performed when the actual parameter is [flat](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenflat_glosry.htm "Glossary Entry") and the formal parameter is [deep](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeep_glosry.htm "Glossary Entry"). (Previously, flat structures could only be compared with flat, and deep with deep).

Modification 4

Further Developments

Now, assignments to neighboring memory areas are bundled in one internal statement, as soon as the syntax check is performed or when the program is generated. This ensures that the system no longer creates superfluous administrative information.

If data objects from the [Automation Controller](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenole2.htm) are referenced, and then disappear from the stack or internal table, the runtime environment aborts as soon as the stack is created. This means, for example, that the object can be displayed in the short dump.

If a program calls a second program at runtime, the system switches to this second program much more quickly than before. It also switches more quickly to a method called by another method. This performance gain is important, if both translation units are in the [PXA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpxa_glosry.htm "Glossary Entry") (Program Executable Area), less so when the program is being read from the database.