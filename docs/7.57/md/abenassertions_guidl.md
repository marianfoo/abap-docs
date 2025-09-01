  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_gdl.htm'\)) →  [Error Handling](javascript:call_link\('abenerror_handling_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Assertions, ABENASSERTIONS_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

Assertions

Background   

The [ASSERT](javascript:call_link\('abapassert.htm'\)) statement is used to express an assertion in an ABAP program. Such an assertion is either always active or can be activated externally by assignment to a checkpoint group. When the program reaches an active assertion, it evaluates the corresponding condition. If the condition is violated, the following happens, depending on the type of activation:

-   The program is terminated with the runtime error ASSERTION\_FAILED.
-   The program branches to the ABAP Debugger.
-   A log entry is created.

Assertions, together with breakpoints and logpoints, form the checkpoints of a program; these are not part of the application logic, but are used for development and maintenance support.

Rule   

Use assertions

Use assertions to check the state of a program for consistency at all locations where this is possible.

Details   

Each program logic is based on certain assumptions. If these assumptions are not met, there are obviously errors in the program and there is no point in executing it any further. In this case, you should stop the execution of the program immediately to avoid any further damage, such as persisted incorrect data. In this way, you can also identify errors early on that would otherwise remain undiscovered.

The ASSERT statement is most suitable for guaranteeing this consistency since it is linked directly to a condition and terminates the program if this condition is violated.

Furthermore, assertions make program maintenance easier by enabling developers to express their assumptions explicitly. The reader of the source code is immediately aware of these assumptions; this gives them a better understanding of the program logic.

If it will take too long to check an assertion condition, you can use the activatable assertions that are linked to checkpoint groups. These can be activated selectively during development, testing, or troubleshooting; otherwise they are not performed. If you suspect an error in a production system, you can also activate activatable assertions there.

Exception

Do not use assertions to check states that are out of the developer's control, such as invalid call parameter values or availability of external resources. In this case, use exceptions, since this enables the caller to react to unexpected states like these.

Example

The following source code shows a program extract in which a line is read from an internal table. The program logic here assumes that this access is always successful. This expectation is checked at runtime by the subsequent assertion, and also documented for the reader.

...
READ TABLE items INTO current\_item INDEX current\_index.
ASSERT sy-subrc = 0.
...