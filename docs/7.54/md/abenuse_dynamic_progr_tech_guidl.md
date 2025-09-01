  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Dynamic Programming Techniques](javascript:call_link\('abendynamic_prog_technique_guidl.htm'\)) → 

Using Dynamic Programming Techniques

Background

The use of dynamic programming techniques includes the following:

-   Accessing dynamic memory objects, that is, dynamic data objects (strings and internal tables), as well as instances of classes and anonymous data objects

-   Dynamically accessing data objects using reference variables and field symbols (to a certain extent, this also includes accessing generically typed formal parameters in procedures)

-   Dynamically invoking procedures or entire programs

-   Creating data types generically and using them to create anonymous data objects

-   Generic program development, where parts of the statements are specified using dynamic tokens or entire programs are not created until runtime

In this sense, handling reference variables can also be considered a dynamic technique. The dynamic type (the object to which the reference points) can be more specific than the static type of the variable, which entails polymorphic behavior and becomes apparent in assignments made using [up casts](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") or [down casts](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry").

Rule

Use dynamic programming techniques with care

Use dynamic programming techniques only when this is necessary and reasonable. Use only as many dynamic language elements as required to carry out the assigned task.

Details

The advantage of dynamic programming techniques is an increased flexibility when creating programs. Dynamic programming techniques enable flexible and generic services to be developed that meet various requirements. The price to be paid for this advantage is that dynamic programming techniques may decrease the static checkability, legibility, maintainability, testability, performance, and also [security](javascript:call_link\('abenabap_security.htm'\)). [Security standards](javascript:call_link\('abencorrectness_quality_guidl.htm'\) "Guideline") may even prohibit the use of high-risk dynamic programming techniques.

This section describes various dynamic programming techniques. These range from [using strings](javascript:call_link\('abenstrings_guidl.htm'\) "Guideline"), which we explicitly recommend, and [using internal tables](javascript:call_link\('abenitab_guidl.htm'\) "Guideline"), which form a basis of ABAP programming, to [generating entire programs](javascript:call_link\('abengeneric_progr_guidl.htm'\) "Guideline"), which we advise against. The higher the dynamics, the more comprehensive the precautionary measures to be taken when using these techniques. Already the simple access to data objects involves a corresponding partial aspect, which was addressed in the rule for [Runtime Errors when Accessing Data Objects](javascript:call_link\('abenruntime_error_dyn_proc_guidl.htm'\) "Guideline"). The rules in this section expand these specific rules and provide a more general framework.

Always consider the following aspects when deploying dynamic techniques:

-   Programs that work with dynamic techniques are usually more complex and harder to understand than programs that use only static techniques. This has a negative effect on maintainability.

-   In dynamic programming, many checks that are otherwise performed in compilations can be performed only at runtime. This considerably increases the risk of exceptions or runtime errors.

-   Checking the dynamic parts at runtime can reduce the processing speed, as the checks must be repeated each time the parts are used again.

-   More tests are required, since numerous states of a dynamic program and possible error situations must be checked.

-   If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the predefined function [escape](javascript:call_link\('abenescape_functions.htm'\)).

The significance of these aspects differs for the various dynamic programming techniques. For example, a program that uses strings is by no means more complex than a program that works only with text fields. In cases like this, a range of details must nevertheless be taken into account.