  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Built-In Data Objects](javascript:call_link\('abenbuilt_in_obsolete.htm'\)) → 

The Built-In Structure screen

In [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") processing in dialog modules, the built-in data object screen of the data type SCREEN from ABAP Dictionary is available. It can be addressed explicitly there and implicitly in obsolete short forms.

-   [LOOP AT SCREEN](javascript:call_link\('abenloop_at_screen_obsolete.htm'\))
-   [MODIFY SCREEN](javascript:call_link\('abenmodify_screen_obsolete.htm'\))

can be used. A data object screen declared explicitly in the current context hides the built-in structure.

Hints

-   Instead of the built-in structure screen, explicitly declared work areas of the type SCREEN should be used in the long forms of the statements above.
-   LOOP AT SCREEN INTO screen or MODIFY SCREEN FROM screen should not be used to access the obsolete built-in structure, even in the long forms.