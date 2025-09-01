# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Statements for RAP

Included pages: 11


### abenrap_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

Obsolete Statements for RAP

-   [Obsolete EML Statements](javascript:call_link\('abeneml_obsolete.htm'\))

Continue
[Obsolete ABP Statements](javascript:call_link\('abenabp_obsolete.htm'\))
[Obsolete ABAP EML Statements](javascript:call_link\('abeneml_obsolete.htm'\))
[Obsolete ABAP EML Language Elements](javascript:call_link\('abenrap_le_obsolete.htm'\))


### abenabp_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Statements for RAP](javascript:call_link\('abenrap_obsolete.htm'\)) → 

Obsolete ABP Statements

-   [METHODS, FOR BEHAVIOR](javascript:call_link\('abapmethods_for_behavior.htm'\))
-   [METHODS, FOR DETERMINATION, VALIDATION](javascript:call_link\('abapmethods_for_det_val_obs.htm'\))

Continue
[METHODS, FOR BEHAVIOR](javascript:call_link\('abapmethods_for_behavior.htm'\))
[METHODS, FOR DETERMINATION, VALIDATION](javascript:call_link\('abapmethods_for_det_val_obs.htm'\))


### abapmethods_for_behavior.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Statements for RAP](javascript:call_link\('abenrap_obsolete.htm'\)) →  [Obsolete ABP Statements](javascript:call_link\('abenabp_obsolete.htm'\)) → 

METHODS, FOR BEHAVIOR

Syntax

  *{* METHODS read   FOR BEHAVIOR ... *}*
*|* *{* METHODS modify FOR BEHAVIOR ... *}*
*|* *{* METHODS lock   FOR BEHAVIOR ... *}*

Effect

Obsolete declaration of [ABP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") in the [handler class](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). When using the addition FOR BEHAVIOR, the methods must have one of the predefined names modify, read, or lock.

Instead the following declarations should be used:

-   [METHODS meth FOR READ   ...](javascript:call_link\('abapmethods_for_rap_behv.htm'\))
-   [METHODS meth FOR MODIFY ...](javascript:call_link\('abapmethods_for_rap_behv.htm'\))
-   [METHODS meth FOR LOCK   ...](javascript:call_link\('abapmethods_for_rap_behv.htm'\))

Here, the name of the method is not prescribed. The meaning of the methods is defined by the addition FOR MODIFY, FOR READ, or FOR LOCK instead.


### abapmethods_for_det_val_obs.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Statements for RAP](javascript:call_link\('abenrap_obsolete.htm'\)) →  [Obsolete ABP Statements](javascript:call_link\('abenabp_obsolete.htm'\)) → 

METHODS, FOR DETERMINATION, VALIDATION

Syntax

  *{* METHODS ... FOR DETERMINATION ... *}*
*|* *{* METHODS ... FOR VALIDATION ... *}*

Effect

Obsolete declaration of [ABP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") in the [handler class](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").


### abenabp_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Statements for RAP](javascript:call_link\('abenrap_obsolete.htm'\)) → 

Obsolete ABP Statements

-   [METHODS, FOR BEHAVIOR](javascript:call_link\('abapmethods_for_behavior.htm'\))
-   [METHODS, FOR DETERMINATION, VALIDATION](javascript:call_link\('abapmethods_for_det_val_obs.htm'\))

Continue
[METHODS, FOR BEHAVIOR](javascript:call_link\('abapmethods_for_behavior.htm'\))
[METHODS, FOR DETERMINATION, VALIDATION](javascript:call_link\('abapmethods_for_det_val_obs.htm'\))


### abeneml_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Statements for RAP](javascript:call_link\('abenrap_obsolete.htm'\)) → 

Obsolete ABAP EML Statements

-   [GET FEATURES](javascript:call_link\('abeneml_get_features.htm'\))

Continue
[GET FEATURES](javascript:call_link\('abeneml_get_features.htm'\))


### abeneml_get_features.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Statements for RAP](javascript:call_link\('abenrap_obsolete.htm'\)) →  [Obsolete ABAP EML Statements](javascript:call_link\('abeneml_obsolete.htm'\)) → 

GET FEATURES

Obsolete Syntax

GET *{* GLOBAL FEATURES
  *|* *{* *\[*INSTANCE*\]* FEATURES *}* *}*
       *{* ENTITY bdef FROM keys
         REQUEST request RESULT result
              *\[*response*\]* *}*
       *|* *{* OF bdef
             ENTITY bdef1 FROM keys
             REQUEST request RESULT result
            *\[*ENTITY bdef2 FROM keys
             REQUEST request RESULT result*\]*
            *\[*... *\]*
              *\[*response*\]* *}*
        *|* *{* OPERATIONS dynget
              *\[*response*\]* *}*.

Alternatives:

[1\. ... GLOBAL FEATURES ENTITY bdef FROM keys REQUEST request RESULT result](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... GLOBAL FEATURES OF bdef ENTITY bdefi FROM keys REQUEST request RESULT result](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... GLOBAL FEATURES OPERATIONS dynget](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... FEATURES ENTITY bdef FROM keys REQUEST request RESULT result](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... FEATURES OF bdef ENTITY bdefi FROM keys REQUEST request RESULT result](#!ABAP_ALTERNATIVE_5@5@)
[6\. ... FEATURES OPERATIONS dynget](#!ABAP_ALTERNATIVE_6@6@)

Addition:

[... INSTANCE](#!ABAP_ONE_ADD@1@)

Effect

[GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\)) should be used instead.

Alternative 1   

... GLOBAL FEATURES ENTITY bdef FROM keys REQUEST request RESULT result

Effect

Alternative 2   

... GLOBAL FEATURES OF bdef ENTITY bdefi FROM keys REQUEST request RESULT result

Effect

Alternative 3   

... GLOBAL FEATURES OPERATIONS dynget

Effect

Alternative 4   

... FEATURES ENTITY bdef FROM keys REQUEST request RESULT result

Effect

Alternative 5   

... FEATURES OF bdef ENTITY bdefi FROM keys REQUEST request RESULT result

Effect

Alternative 6   

... FEATURES OPERATIONS dynget

Effect

Addition   

... INSTANCE

Effect


### abeneml_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Statements for RAP](javascript:call_link\('abenrap_obsolete.htm'\)) → 

Obsolete ABAP EML Statements

-   [GET FEATURES](javascript:call_link\('abeneml_get_features.htm'\))

Continue
[GET FEATURES](javascript:call_link\('abeneml_get_features.htm'\))


### abenrap_le_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Statements for RAP](javascript:call_link\('abenrap_obsolete.htm'\)) → 

Obsolete ABAP EML Language Elements

-   [Obsolete BDEF-Derived Types](javascript:call_link\('abapderived_types_obsolete.htm'\))

Continue
[ABAP EML - Obsolete BDEF Derived Types](javascript:call_link\('abapderived_types_obsolete.htm'\))


### abapderived_types_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Statements for RAP](javascript:call_link\('abenrap_obsolete.htm'\)) →  [Obsolete ABAP EML Language Elements](javascript:call_link\('abenrap_le_obsolete.htm'\)) → 

ABAP EML - Obsolete BDEF Derived Types

Syntax

... *\[*TYPE*\]* *{* TABLE *|* STRUCTURE *}* FOR LOCK bdef.

Effect

Special ABAP type that is used for internal tables and structures in the context of [RAP](javascript:call_link\('abenrap_glosry.htm'\) "Glossary Entry") to enable the communication between a [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") and a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry").

Overview

The following table covers the variants including information on the BDEF prerequisites and its components.

For more information on the components, see [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)). For more information on the BDEF specifications, see the subtopics in [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)).

TYPE TABLE FOR ...

Purpose

BDEF Prerequisites

Components

LOCK

Used to specify [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") that are to be locked in the context of the ABAP EML statement [SET LOCKS](javascript:call_link\('abapset_locks.htm'\)). It is basically the same as TYPE TABLE KEY OF (or TYPE STRUCTURE FOR KEY OF respectively). In ADT, a variable typed with TYPE TABLE FOR LOCK shows TYPE TABLE FOR KEY OF (or TYPE STRUCTURE FOR LOCK shows TYPE STRUCTURE FOR KEY OF respectively) in the element information (F2).

See the details in the CDS BDL documentation for [locking](javascript:call_link\('abenbdl_locking.htm'\)).

The keys (not %key).
Note: %is\_draft and %pid are not possible.

Further Information

-   [TYPE TABLE FOR](javascript:call_link\('abaptype_table_for.htm'\))
-   [TYPE STRUCTURE FOR](javascript:call_link\('abaptype_structure_for.htm'\))


### abenrap_le_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Statements for RAP](javascript:call_link\('abenrap_obsolete.htm'\)) → 

Obsolete ABAP EML Language Elements

-   [Obsolete BDEF-Derived Types](javascript:call_link\('abapderived_types_obsolete.htm'\))

Continue
[ABAP EML - Obsolete BDEF Derived Types](javascript:call_link\('abapderived_types_obsolete.htm'\))
