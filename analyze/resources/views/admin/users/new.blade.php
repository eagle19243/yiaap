@section('site_title', formatTitle([__('New'), __('User'), config('settings.title')]))

@include('shared.breadcrumbs', ['breadcrumbs' => [
    ['url' => route('admin.dashboard'), 'title' => __('Admin')],
    ['url' => route('admin.users'), 'title' => __('Users')],
    ['title' => __('New')],
]])

<h2 class="mb-3 d-inline-block">{{ __('New') }}</h2>

<div class="card border-0 shadow-sm">
    <div class="card-header"><div class="font-weight-medium py-1">{{ __('User') }}</div></div>
    <div class="card-body">
        @include('shared.message')

        <form method="POST" action="{{ route('admin.users.new') }}" id="registration-form">
            @csrf

            <div class="form-group">
                <label for="i_name">{{ __('Name') }}</label>
                <input id="i_name" type="text" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" autofocus>
                @if ($errors->has('name'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('name') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form-group">
                <label for="i_email">{{ __('Email address') }}</label>
                <input id="i_email" type="text" dir="ltr" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}">
                @if ($errors->has('email'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form-group">
                <label for="i_password">{{ __('Password') }}</label>
                <input id="i_password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password">
                @if ($errors->has('password'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form-group">
                <label for="i_password_confirmation">{{ __('Confirm password') }}</label>
                <input id="i_password_confirmation" type="password" class="form-control{{ $errors->has('password_confirmation') ? ' is-invalid' : '' }}" name="password_confirmation">
            </div>

            <button type="submit" name="submit" class="btn btn-primary">{{ __('Save') }}</button>
        </form>
    </div>
</div>