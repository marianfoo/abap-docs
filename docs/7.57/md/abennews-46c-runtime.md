  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.6C](javascript:call_link\('abennews-46c.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Optimization in the Runtime Framework in Release 4.6C, ABENNEWS-46C-RUNTIME, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Optimization in the Runtime Framework in Release 4.6C

In Release 4.6C, the entire ABAP runtime framework was overhauled, in terms of how programs were generated and executed. The following steps were taken to reduce the load size considerably and improve performance further.

[1\. Handling the Database Buffer](#!ABAP_MODIFICATION_1@1@)
[2\. Handling Type Pools](#!ABAP_MODIFICATION_2@2@)
[3\. Handling Structures](#!ABAP_MODIFICATION_3@3@)
[4\. Further Developments](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Handling the Database Buffer

The statement [PERFORM n ON ON ROLLBACK](javascript:call_link\('abapperform.htm'\)), which is the equivalent to the statement [PERFORM n ON COMMIT](javascript:call_link\('abapperform.htm'\)), can now be used in the program. This means that all flagged form routines are executed when [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) is used.

Until now, if a termination message was raised by a [CATCH SYSTEM-EXCEPTIONS ...](javascript:call_link\('abapcatch_sys.htm'\)) statement, only one rollback was carried out in the task handler area. Now the system calls a subroutine, which deletes all [ON COMMIT](javascript:call_link\('abapperform.htm'\)) information and performs the scheduled subroutines.

The system field SY-ONCOM is now set for local [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") (as it is for asynchronous updates). This raises a runtime error when a [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) is triggered for a local update.

Modification 2   

Handling Type Pools

From now on, types in type pools that are not used are no longer generated in the programs that use the [TYPE POOL](javascript:call_link\('abaptype-pool.htm'\)). Dynamic accesses are now performed by loading the load table for the type pools at runtime.

In addition, constants in type pools that are not used are no longer generated in the programs that include them. Duplicate control blocks for components are no longer created in key lists for ABAP Dictionary tables. Again, dynamic accesses are now performed using type pool load.

Modification 3   

Handling Structures

Additional type information for structure components is no longer generated when the system performs simple operations like [\=](javascript:call_link\('abapmove.htm'\)) or [IF](javascript:call_link\('abapif.htm'\)).

Now, when a structure is passed to a [form routine](javascript:call_link\('abapform.htm'\)), the type comparison is also performed when the actual parameter is [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") and the formal parameter is [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry"). (Previously, flat structures could only be compared with flat, and deep with deep).

Modification 4   

Further Developments

Now, assignments to neighboring memory areas are bundled in one internal statement, as soon as the syntax check is performed or when the program is generated. This ensures that the system no longer creates superfluous administrative information.

If data objects from the [Automation Controller](javascript:call_link\('abenole2.htm'\)) are referenced, and then disappear from the stack or internal table, the runtime framework aborts as soon as the stack is created. This means, for example, that the object can be displayed in the short dump.

If a program calls a second program at runtime, the system switches to this second program much more quickly than before. It also switches more quickly to a method called by another method. This performance gain is important, if both translation units are in the [PXA](javascript:call_link\('abenpxa_glosry.htm'\) "Glossary Entry") (Program Executable Area), less so when the program is being read from the database.