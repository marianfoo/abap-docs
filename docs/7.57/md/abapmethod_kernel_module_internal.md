  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Procedures](javascript:call_link\('abenabap_language_procedures.htm'\)) →  [Methods](javascript:call_link\('abenabap_methods.htm'\)) →  [METHOD](javascript:call_link\('abapmethod.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: METHOD, Internal Additions, ABAPMETHOD_KERNEL_MODULE_INTERNAL, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

METHOD, Internal Additions

These additions are for internal use only.
Do not use them in application programs.

Addition:

... ... BY KERNEL MODULE p1 ...

Effect

This addition to the statement METHOD defines the method meth as a [kernel method](javascript:call_link\('abenkernel_methods.htm'\)). This means that the method meth is not implemented in ABAP but in the kernel instead by using one of the kernel modules p1 specified here. No statements are allowed between METHOD and ENDMETHOD.

Hint

In global classes, the addition must be entered directly in the source code editor of the Class Builder and is not listed under the properties of the method there.