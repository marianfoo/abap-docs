  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Built-In Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_obsolete.htm) → 

The Built-In Structure screen

In [dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") processing in dialog modules, the built-in data object screen of the data type SCREEN from ABAP Dictionary is available. It can be addressed explicitly there and implicitly in obsolete short forms.

-   [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenloop_at_screen_obsolete.htm)
-   [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmodify_screen_obsolete.htm)

can be used. A data object screen declared explicitly in the current context hides the built-in structure.

Hints

-   Instead of the built-in structure screen, explicitly declared work areas of the type SCREEN should be used in the long forms of the statements above.
-   LOOP AT SCREEN INTO screen or MODIFY SCREEN FROM screen should not be used to access the obsolete built-in structure, even in the long forms.